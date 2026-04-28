export function renderAdminPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>DCANNAI Leads</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f5f5f7;
        color: #111113;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #f5f5f7;
      }

      header {
        position: sticky;
        top: 0;
        z-index: 2;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        background: rgba(245, 245, 247, 0.86);
        backdrop-filter: blur(18px);
      }

      .shell {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 72px;
        gap: 20px;
      }

      h1 {
        margin: 0;
        font-size: clamp(26px, 4vw, 48px);
        letter-spacing: 0;
      }

      .eyebrow {
        margin: 0 0 6px;
        color: #65656b;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
      }

      main {
        padding: 44px 0 72px;
      }

      .summary {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin: 28px 0 24px;
      }

      .metric,
      .panel,
      .lead {
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 0 18px 60px rgba(0, 0, 0, 0.06);
      }

      .metric {
        padding: 18px;
      }

      .metric strong {
        display: block;
        font-size: 30px;
      }

      .metric span {
        color: #696970;
        font-size: 13px;
      }

      .panel {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px;
        margin-bottom: 18px;
      }

      select,
      button {
        min-height: 40px;
        border-radius: 999px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        background: #fff;
        padding: 0 14px;
        font: inherit;
      }

      button {
        cursor: pointer;
        background: #111113;
        color: #fff;
        border-color: #111113;
        font-weight: 700;
      }

      .leads {
        display: grid;
        gap: 12px;
      }

      .lead {
        padding: 18px;
      }

      .lead-head {
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }

      .lead h2 {
        margin: 0 0 4px;
        font-size: 19px;
      }

      .lead a {
        color: #0a63ce;
        text-decoration: none;
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 12px 0;
      }

      .pill {
        border-radius: 999px;
        background: #f0f0f2;
        color: #44444b;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 700;
      }

      .message {
        margin: 14px 0 0;
        color: #333338;
        line-height: 1.55;
        white-space: pre-wrap;
      }

      .empty {
        padding: 36px;
        text-align: center;
        color: #696970;
      }

      @media (max-width: 760px) {
        .summary {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .lead-head {
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="shell topbar">
        <div>
          <p class="eyebrow">DCANNAI Admin</p>
          <h1>Contact Leads</h1>
        </div>
        <button id="refresh">Refresh</button>
      </div>
    </header>
    <main class="shell">
      <section class="summary" id="summary"></section>
      <section class="panel">
        <div>
          <label>
            Status
            <select id="statusFilter">
              <option value="">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
              <option value="spam">Spam</option>
            </select>
          </label>
        </div>
        <span id="lastUpdated"></span>
      </section>
      <section class="leads" id="leads"></section>
    </main>
    <script>
      const leadsEl = document.querySelector("#leads");
      const summaryEl = document.querySelector("#summary");
      const statusFilter = document.querySelector("#statusFilter");
      const lastUpdated = document.querySelector("#lastUpdated");
      const statuses = ["new", "contacted", "qualified", "closed", "spam"];

      async function loadLeads() {
        leadsEl.innerHTML = '<div class="lead empty">Loading leads...</div>';
        const params = new URLSearchParams();
        if (statusFilter.value) params.set("status", statusFilter.value);
        const response = await fetch("/api/admin/submissions?" + params.toString());
        if (!response.ok) {
          leadsEl.innerHTML = '<div class="lead empty">Unable to load leads.</div>';
          return;
        }
        const data = await response.json();
        renderSummary(data.submissions);
        renderLeads(data.submissions);
        lastUpdated.textContent = "Updated " + new Date().toLocaleString();
      }

      function renderSummary(leads) {
        const counts = statuses.reduce((acc, status) => ({ ...acc, [status]: 0 }), {});
        for (const lead of leads) counts[lead.status] = (counts[lead.status] || 0) + 1;
        summaryEl.innerHTML = [
          ["Total", leads.length],
          ["New", counts.new || 0],
          ["Chess", leads.filter((lead) => lead.product === "chess").length],
          ["BioTrack", leads.filter((lead) => lead.product === "biotrack").length]
        ].map(([label, value]) => '<div class="metric"><strong>' + value + '</strong><span>' + label + '</span></div>').join("");
      }

      function renderLeads(leads) {
        if (!leads.length) {
          leadsEl.innerHTML = '<div class="lead empty">No leads match this filter.</div>';
          return;
        }
        leadsEl.innerHTML = leads.map((lead) => {
          const created = new Date(lead.created_at).toLocaleString();
          const fields = [
            lead.product,
            lead.source,
            lead.company,
            lead.interest,
            lead.timeline,
            created
          ].filter(Boolean);
          return '<article class="lead">' +
            '<div class="lead-head">' +
              '<div><h2>' + escapeHtml(lead.name) + '</h2><a href="mailto:' + encodeURIComponent(lead.email) + '">' + escapeHtml(lead.email) + '</a></div>' +
              '<select data-id="' + lead.id + '" data-status>' +
                statuses.map((status) => '<option value="' + status + '"' + (status === lead.status ? " selected" : "") + '>' + status + '</option>').join("") +
              '</select>' +
            '</div>' +
            '<div class="meta">' + fields.map((field) => '<span class="pill">' + escapeHtml(field) + '</span>').join("") + '</div>' +
            '<p class="message">' + escapeHtml(lead.message) + '</p>' +
          '</article>';
        }).join("");
      }

      function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>"']/g, (char) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        }[char]));
      }

      leadsEl.addEventListener("change", async (event) => {
        const target = event.target;
        if (!target.matches("[data-status]")) return;
        await fetch("/api/admin/submissions/" + target.dataset.id, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: target.value })
        });
        await loadLeads();
      });

      document.querySelector("#refresh").addEventListener("click", loadLeads);
      statusFilter.addEventListener("change", loadLeads);
      loadLeads();
    </script>
  </body>
</html>`;
}
