import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app">

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <div class="logo-icon">⚡</div>
        <div>
          <h2>PowerGuard</h2>
          <span>AI Intelligence</span>
        </div>
      </div>

      <nav class="nav">
        <a class="nav-item active" href="#">
          <span>▦</span> Dashboard
        </a>

        <a class="nav-item" href="#">
          <span>◉</span> Consumers
        </a>

        <a class="nav-item" href="#">
          <span>◌</span> Consumption
        </a>

        <a class="nav-item" href="#">
          <span>⌁</span> AI Analysis
        </a>

        <a class="nav-item" href="#">
          <span>◈</span> Analytics
        </a>

        <a class="nav-item" href="#">
          <span>♢</span> Alerts
        </a>
      </nav>

      <div class="sidebar-bottom">
        <div class="system-status">
          <span class="status-dot"></span>
          <div>
            <strong>System Online</strong>
            <small>AI monitoring active</small>
          </div>
        </div>

        <div class="admin">
          <div class="avatar">A</div>
          <div>
            <strong>Administrator</strong>
            <small>Control Center</small>
          </div>
        </div>
      </div>
    </aside>


    <!-- Main Content -->
    <main class="main-content">

      <!-- Header -->
      <header class="topbar">
        <div>
          <p class="breadcrumb">CONTROL CENTER / DASHBOARD</p>
          <h1>Electricity Intelligence</h1>
        </div>

        <div class="top-actions">
          <button class="icon-button">⌕</button>
          <button class="notification">
            ♢
            <span></span>
          </button>
          <div class="date">04 September 2026</div>
        </div>
      </header>


      <!-- Welcome -->
      <section class="welcome">
        <div>
          <p class="eyebrow">AI-POWERED MONITORING</p>
          <h2>Good evening, Admin 👋</h2>
          <p>
            Monitor electricity consumption and identify abnormal
            usage patterns with intelligent AI analysis.
          </p>
        </div>

        <button class="analyze-btn">
          <span>✦</span> Run AI Analysis
        </button>
      </section>


      <!-- Statistics -->
      <section class="stats-grid">

        <div class="stat-card">
          <div class="stat-top">
            <span>Total Consumers</span>
            <div class="stat-icon">♙</div>
          </div>
          <h3>12,450</h3>
          <p class="positive">↑ 4.8% <span>vs last month</span></p>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <span>Monitored Meters</span>
            <div class="stat-icon">⚡</div>
          </div>
          <h3>11,982</h3>
          <p class="positive">↑ 2.4% <span>active monitoring</span></p>
        </div>

        <div class="stat-card warning-card">
          <div class="stat-top">
            <span>Suspicious Cases</span>
            <div class="stat-icon warning">!</div>
          </div>
          <h3>184</h3>
          <p class="warning-text">↑ 12 cases <span>this week</span></p>
        </div>

        <div class="stat-card danger-card">
          <div class="stat-top">
            <span>High Risk</span>
            <div class="stat-icon danger">⚠</div>
          </div>
          <h3>67</h3>
          <p class="danger-text">↑ 8 cases <span>require review</span></p>
        </div>

      </section>


      <!-- Charts -->
      <section class="dashboard-grid">

        <div class="panel consumption-panel">
          <div class="panel-header">
            <div>
              <span class="panel-label">CONSUMPTION TREND</span>
              <h3>Electricity Consumption</h3>
            </div>

            <select>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <div class="chart">
            <div class="y-labels">
              <span>1000</span>
              <span>750</span>
              <span>500</span>
              <span>250</span>
              <span>0</span>
            </div>

            <div class="chart-area">
              <div class="grid-line line1"></div>
              <div class="grid-line line2"></div>
              <div class="grid-line line3"></div>
              <div class="grid-line line4"></div>

              <svg viewBox="0 0 700 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-opacity=".30"/>
                    <stop offset="100%" stop-opacity="0"/>
                  </linearGradient>
                </defs>

                <path
                  d="M0,180
                     C60,160 70,120 120,140
                     C170,160 180,95 230,110
                     C280,125 300,70 350,95
                     C400,120 420,65 470,82
                     C520,100 540,45 590,70
                     C630,90 660,40 700,55
                     L700,240 L0,240 Z"
                  fill="url(#areaGradient)"
                />

                <path
                  d="M0,180
                     C60,160 70,120 120,140
                     C170,160 180,95 230,110
                     C280,125 300,70 350,95
                     C400,120 420,65 470,82
                     C520,100 540,45 590,70
                     C630,90 660,40 700,55"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                />
              </svg>

              <div class="x-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>


        <!-- Risk Distribution -->
        <div class="panel risk-panel">
          <div class="panel-header">
            <div>
              <span class="panel-label">AI DETECTION</span>
              <h3>Risk Distribution</h3>
            </div>
          </div>

          <div class="risk-content">
            <div class="donut">
              <div class="donut-center">
                <strong>12,450</strong>
                <span>Consumers</span>
              </div>
            </div>

            <div class="risk-list">

              <div class="risk-item">
                <div>
                  <span class="risk-dot normal"></span>
                  Normal
                </div>
                <strong>82%</strong>
              </div>

              <div class="risk-item">
                <div>
                  <span class="risk-dot medium"></span>
                  Medium Risk
                </div>
                <strong>13%</strong>
              </div>

              <div class="risk-item">
                <div>
                  <span class="risk-dot high"></span>
                  High Risk
                </div>
                <strong>5%</strong>
              </div>

            </div>
          </div>
        </div>

      </section>


      <!-- Bottom section -->
      <section class="bottom-grid">

        <!-- Suspicious consumers -->
        <div class="panel">
          <div class="panel-header">
            <div>
              <span class="panel-label">ATTENTION REQUIRED</span>
              <h3>Recent Suspicious Consumers</h3>
            </div>

            <button class="view-btn">View All →</button>
          </div>

          <div class="consumer-table">

            <div class="table-row table-heading">
              <span>Consumer</span>
              <span>Area</span>
              <span>Risk Score</span>
              <span>Status</span>
            </div>

            <div class="table-row">
              <div class="consumer-name">
                <div class="consumer-avatar">C1</div>
                <div>
                  <strong>CON1024</strong>
                  <small>MTR4521</small>
                </div>
              </div>
              <span>Nashik</span>
              <strong class="risk-number high-number">91%</strong>
              <span class="badge high-badge">High Risk</span>
            </div>

            <div class="table-row">
              <div class="consumer-name">
                <div class="consumer-avatar">C2</div>
                <div>
                  <strong>CON1087</strong>
                  <small>MTR6732</small>
                </div>
              </div>
              <span>Pune</span>
              <strong class="risk-number high-number">84%</strong>
              <span class="badge high-badge">High Risk</span>
            </div>

            <div class="table-row">
              <div class="consumer-name">
                <div class="consumer-avatar">C3</div>
                <div>
                  <strong>CON1121</strong>
                  <small>MTR2187</small>
                </div>
              </div>
              <span>Nashik</span>
              <strong class="risk-number medium-number">67%</strong>
              <span class="badge medium-badge">Review</span>
            </div>

          </div>
        </div>


        <!-- AI Status -->
        <div class="panel ai-panel">
          <div class="panel-label">AI ENGINE</div>
          <h3>Detection System</h3>

          <div class="ai-status">
            <div class="ai-pulse">
              <span>✦</span>
            </div>

            <div>
              <strong>AI Model Active</strong>
              <p>Continuous anomaly detection</p>
            </div>
          </div>

          <div class="model-info">
            <div>
              <span>Model</span>
              <strong>Isolation Forest</strong>
            </div>

            <div>
              <span>Last Analysis</span>
              <strong>2 min ago</strong>
            </div>

            <div>
              <span>Records Analyzed</span>
              <strong>48,290</strong>
            </div>
          </div>

          <button class="full-analysis">
            Open AI Analysis →
          </button>
        </div>

      </section>

      <footer>
        <span>PowerGuard AI • Electricity Intelligence Platform</span>
        <span>System Status: <b>Operational</b></span>
      </footer>

    </main>
  </div>
`