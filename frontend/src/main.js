import './style.css'

// =====================================================
// MAIN APPLICATION
// =====================================================

document.querySelector('#app').innerHTML = `
<div class="app">

  <!-- SIDEBAR -->
  <aside class="sidebar">

    <div class="logo">
      <div class="logo-icon">⚡</div>
      <div>
        <h2>PowerGuard</h2>
        <span>AI INTELLIGENCE</span>
      </div>
    </div>

    <nav class="nav">

      <a class="nav-item active" href="#" data-page="Dashboard">
        <span>▦</span> Dashboard
      </a>

      <a class="nav-item" href="#" data-page="Consumers">
        <span>◉</span> Consumers
      </a>

      <a class="nav-item" href="#" data-page="Consumption">
        <span>◌</span> Consumption
      </a>

      <a class="nav-item" href="#" data-page="AI Analysis">
        <span>⌁</span> AI Analysis
      </a>

      <a class="nav-item" href="#" data-page="Analytics">
        <span>◈</span> Analytics
      </a>

      <a class="nav-item" href="#" data-page="Alerts">
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


  <!-- MAIN -->
  <main class="main-content" id="mainContent"></main>

</div>
`

const main = document.querySelector('#mainContent')
const navItems = document.querySelectorAll('.nav-item')


// =====================================================
// NAVIGATION
// =====================================================

navItems.forEach(item => {

  item.addEventListener('click', function (event) {

    event.preventDefault()

    navItems.forEach(nav => {
      nav.classList.remove('active')
    })

    this.classList.add('active')

    const page = this.dataset.page

    showPage(page)

  })

})


// =====================================================
// HEADER
// =====================================================

function header(title) {

  return `
    <header class="topbar">

      <div>
        <p class="breadcrumb">
          POWERGUARD / ${title.toUpperCase()}
        </p>

        <h1>${title}</h1>
      </div>

      <div class="top-actions">
        <div class="date">
          04 September 2026
        </div>
      </div>

    </header>
  `
}


// =====================================================
// DASHBOARD
// =====================================================

function dashboardPage() {

  main.innerHTML = `

    ${header('Electricity Intelligence')}

    <section class="welcome">

      <div>
        <p class="eyebrow">
          AI-POWERED MONITORING
        </p>

        <h2>
          Good evening, Admin 👋
        </h2>

        <p>
          Monitor electricity consumption and identify abnormal
          usage patterns with intelligent AI analysis.
        </p>
      </div>

      <button class="analyze-btn" id="runAnalysis">
        ✦ Run AI Analysis
      </button>

    </section>


    <!-- STATISTICS -->

    <section class="stats-grid">

      <div class="stat-card">
        <div class="stat-top">
          <span>Total Consumers</span>
          <div class="stat-icon">♙</div>
        </div>

        <h3>12,450</h3>

        <p class="positive">
          ↑ 4.8% <span>vs last month</span>
        </p>
      </div>


      <div class="stat-card">
        <div class="stat-top">
          <span>Monitored Meters</span>
          <div class="stat-icon">⚡</div>
        </div>

        <h3>11,982</h3>

        <p class="positive">
          Active monitoring
        </p>
      </div>


      <div class="stat-card warning-card">
        <div class="stat-top">
          <span>Suspicious Cases</span>
          <div class="stat-icon warning">!</div>
        </div>

        <h3>184</h3>

        <p class="warning-text">
          ↑ 12 cases <span>this week</span>
        </p>
      </div>


      <div class="stat-card danger-card">
        <div class="stat-top">
          <span>High Risk</span>
          <div class="stat-icon danger">⚠</div>
        </div>

        <h3>67</h3>

        <p class="danger-text">
          ↑ 8 cases <span>require review</span>
        </p>
      </div>

    </section>


    <!-- DASHBOARD PANELS -->

    <section class="dashboard-grid">

      <div class="panel">

        <div class="panel-header">

          <div>
            <span class="panel-label">
              CONSUMPTION TREND
            </span>

            <h3>
              Electricity Consumption
            </h3>
          </div>

          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
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

            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>

            <svg viewBox="0 0 700 240"
                 preserveAspectRatio="none">

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


      <div class="panel">

        <div class="panel-header">

          <div>
            <span class="panel-label">
              AI DETECTION
            </span>

            <h3>
              Risk Distribution
            </h3>
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


    <!-- RECENT CASES -->

    <section class="bottom-grid">

      <div class="panel">

        <div class="panel-header">

          <div>
            <span class="panel-label">
              ATTENTION REQUIRED
            </span>

            <h3>
              Recent Suspicious Consumers
            </h3>
          </div>

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

            <strong class="risk-number high-number">
              91%
            </strong>

            <span class="badge high-badge">
              High Risk
            </span>

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

            <strong class="risk-number high-number">
              84%
            </strong>

            <span class="badge high-badge">
              High Risk
            </span>

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

            <strong class="risk-number medium-number">
              67%
            </strong>

            <span class="badge medium-badge">
              Review
            </span>

          </div>

        </div>

      </div>


      <div class="panel ai-panel">

        <span class="panel-label">
          AI ENGINE
        </span>

        <h3>
          Detection System
        </h3>

        <div class="ai-status">

          <div class="ai-pulse">
            ✦
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

      </div>

    </section>


    <footer>
      <span>
        PowerGuard AI • Electricity Intelligence Platform
      </span>

      <span>
        System Status: <b>Operational</b>
      </span>
    </footer>
  `


  const button = document.querySelector('#runAnalysis')

button.addEventListener('click', () => {

  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.classList.remove('active')
  })

  const aiNav = document.querySelector(
    '.nav-item[data-page="AI Analysis"]'
  )

  aiNav.classList.add('active')

  aiAnalysisPage()

})

}


// =====================================================
// CONSUMERS
// =====================================================

function consumersPage() {

  main.innerHTML = `

    ${header('Consumers')}

    <section style="padding:30px">

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-top">
            <span>Total Consumers</span>
            <div class="stat-icon">♙</div>
          </div>

          <h3>12,450</h3>

          <p class="positive">
            ↑ 4.8% <span>vs last month</span>
          </p>
        </div>


        <div class="stat-card">
          <div class="stat-top">
            <span>Active Meters</span>
            <div class="stat-icon">⚡</div>
          </div>

          <h3>11,982</h3>

          <p class="positive">
            Active monitoring
          </p>
        </div>


        <div class="stat-card warning-card">
          <div class="stat-top">
            <span>Suspicious</span>
            <div class="stat-icon warning">!</div>
          </div>

          <h3>184</h3>

          <p class="warning-text">
            Requires review
          </p>
        </div>


        <div class="stat-card danger-card">
          <div class="stat-top">
            <span>High Risk</span>
            <div class="stat-icon danger">⚠</div>
          </div>

          <h3>67</h3>

          <p class="danger-text">
            Immediate attention
          </p>
        </div>

      </div>


      <div class="panel"
           style="padding:30px;margin-top:25px">

        <div class="panel-header">

          <div>
            <span class="panel-label">
              CONSUMER MONITORING
            </span>

            <h3>
              Consumer Records
            </h3>
          </div>

          <input
            id="consumerSearch"
            type="text"
            placeholder="Search Consumer ID..."
            style="
              padding:12px 16px;
              border-radius:8px;
              border:1px solid #283142;
              background:#111722;
              color:white;
              outline:none;
            "
          >

        </div>


        <div class="consumer-table"
             style="margin-top:20px">

          <div class="table-row table-heading">

            <span>Consumer</span>
            <span>Area</span>
            <span>Consumption</span>
            <span>Risk Score</span>
            <span>Status</span>

          </div>


          ${consumerRow(
            'C1',
            'CON1024',
            'MTR4521',
            'Nashik',
            '486 kWh',
            '91%',
            'High Risk'
          )}

          ${consumerRow(
            'C2',
            'CON1087',
            'MTR6732',
            'Pune',
            '421 kWh',
            '84%',
            'High Risk'
          )}

          ${consumerRow(
            'C3',
            'CON1121',
            'MTR2187',
            'Nashik',
            '356 kWh',
            '67%',
            'Review'
          )}

          ${consumerRow(
            'C4',
            'CON1156',
            'MTR7845',
            'Mumbai',
            '298 kWh',
            '54%',
            'Review'
          )}

          ${consumerRow(
            'C5',
            'CON1204',
            'MTR9234',
            'Pune',
            '210 kWh',
            '18%',
            'Normal'
          )}

        </div>

      </div>

    </section>
  `


  const search = document.querySelector('#consumerSearch')

  search.addEventListener('input', () => {

    const value = search.value.toLowerCase()

    document.querySelectorAll('.consumer-record')
      .forEach(row => {

        row.style.display =
          row.innerText.toLowerCase().includes(value)
            ? 'grid'
            : 'none'

      })

  })

}


function consumerRow(
  avatar,
  consumer,
  meter,
  area,
  consumption,
  risk,
  status
) {

  const high = status === 'High Risk'
  const medium = status === 'Review'

  return `

    <div class="table-row consumer-record">

      <div class="consumer-name">

        <div class="consumer-avatar">
          ${avatar}
        </div>

        <div>
          <strong>${consumer}</strong>
          <small>${meter}</small>
        </div>

      </div>

      <span>${area}</span>

      <span>${consumption}</span>

      <strong class="risk-number ${
        high
          ? 'high-number'
          : medium
            ? 'medium-number'
            : ''
      }">
        ${risk}
      </strong>

      <span class="badge ${
        high
          ? 'high-badge'
          : medium
            ? 'medium-badge'
            : ''
      }">
        ${status}
      </span>

    </div>
  `
}


// =====================================================
// CONSUMPTION
// =====================================================

function consumptionPage() {

  main.innerHTML = `

    ${header('Electricity Consumption')}

    <section style="padding:30px">

      <!-- STATISTICS -->

      <div class="stats-grid">

        <div class="stat-card">

          <div class="stat-top">
            <span>Total Consumption</span>
            <div class="stat-icon">⚡</div>
          </div>

          <h3>3,842 kWh</h3>

          <p class="positive">
            ↑ 6.4% <span>vs last week</span>
          </p>

        </div>


        <div class="stat-card">

          <div class="stat-top">
            <span>Average Usage</span>
            <div class="stat-icon">◌</div>
          </div>

          <h3>549 kWh</h3>

          <p class="positive">
            Daily average
          </p>

        </div>


        <div class="stat-card warning-card">

          <div class="stat-top">
            <span>Peak Consumption</span>
            <div class="stat-icon warning">↑</div>
          </div>

          <h3>782 kWh</h3>

          <p class="warning-text">
            Thursday
          </p>

        </div>


        <div class="stat-card danger-card">

          <div class="stat-top">
            <span>Abnormal Usage</span>
            <div class="stat-icon danger">!</div>
          </div>

          <h3>14</h3>

          <p class="danger-text">
            Cases detected
          </p>

        </div>

      </div>


      <!-- CHART -->

      <div class="panel"
           style="padding:30px;margin-top:25px">

        <div class="panel-header">

          <div>

            <span class="panel-label">
              CONSUMPTION MONITORING
            </span>

            <h3>
              Weekly Electricity Consumption
            </h3>

          </div>

          <select id="consumptionFilter">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>

        </div>


        <div style="
          height:330px;
          display:flex;
          align-items:flex-end;
          justify-content:space-around;
          padding:30px 20px 10px;
          gap:20px;
        ">

          ${bar('Mon', '465', '58%')}
          ${bar('Tue', '578', '72%')}
          ${bar('Wed', '520', '65%')}
          ${bar('Thu', '782', '88%')}
          ${bar('Fri', '545', '68%')}
          ${bar('Sat', '612', '76%')}
          ${bar('Sun', '340', '42%')}

        </div>

      </div>


      <!-- CONSUMER CONSUMPTION -->

      <div class="panel"
           style="padding:30px;margin-top:25px">

        <div class="panel-header">

          <div>

            <span class="panel-label">
              CONSUMER ANALYSIS
            </span>

            <h3>
              Highest Consumption Consumers
            </h3>

          </div>

        </div>


        <div class="consumer-table"
             style="margin-top:20px">

          <div class="table-row table-heading">

            <span>Consumer</span>
            <span>Area</span>
            <span>Consumption</span>
            <span>Risk</span>

          </div>


          <div class="table-row">

            <strong>CON1024</strong>

            <span>Nashik</span>

            <strong>486 kWh</strong>

            <strong class="risk-number high-number">
              91%
            </strong>

          </div>


          <div class="table-row">

            <strong>CON1087</strong>

            <span>Pune</span>

            <strong>421 kWh</strong>

            <strong class="risk-number high-number">
              84%
            </strong>

          </div>


          <div class="table-row">

            <strong>CON1121</strong>

            <span>Nashik</span>

            <strong>356 kWh</strong>

            <strong class="risk-number medium-number">
              67%
            </strong>

          </div>


          <div class="table-row">

            <strong>CON1156</strong>

            <span>Mumbai</span>

            <strong>298 kWh</strong>

            <strong class="risk-number medium-number">
              54%
            </strong>

          </div>

        </div>

      </div>

    </section>
  `
}


function bar(day, value, height) {

  return `

    <div style="
      height:100%;
      flex:1;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      align-items:center;
      gap:8px;
    ">

      <strong style="font-size:12px">
        ${value}
      </strong>

      <div style="
        width:55px;
        height:${height};
        background:#9dff00;
        border-radius:6px 6px 0 0;
      "></div>

      <span>
        ${day}
      </span>

    </div>
  `
}


// =====================================================
// AI ANALYSIS
// =====================================================

function aiAnalysisPage() {

  main.innerHTML = `

    ${header('AI Analysis')}

    <section style="padding:30px">

      <div class="panel" style="padding:30px">

        <span class="panel-label">
          AI DETECTION ENGINE
        </span>

        <h2 style="margin-top:10px">
          Electricity Theft Detection
        </h2>

        <p style="margin-top:10px">
          Analyze consumer electricity usage using AI.
        </p>

        <div style="
          margin-top:30px;
          padding:25px;
          border:1px solid #283142;
          border-radius:12px;
        ">

          <h3>Run Consumer Analysis</h3>

          <p style="margin-top:8px">
            Enter Consumer ID to analyze electricity usage.
          </p>

          <div style="
            display:flex;
            gap:15px;
            margin-top:20px;
            flex-wrap:wrap;
          ">

            <input
              id="consumerIdInput"
              type="text"
              placeholder="Enter Consumer ID e.g. CON1024"
              style="
                flex:1;
                min-width:250px;
                padding:14px 16px;
                border-radius:8px;
                border:1px solid #283142;
                background:#111722;
                color:white;
                outline:none;
              "
            >

            <button
              id="analyzeConsumerBtn"
              style="
                padding:14px 25px;
                border:none;
                border-radius:8px;
                background:#c8ff22;
                color:#10140b;
                font-weight:700;
                cursor:pointer;
              "
            >
              ✦ Analyze Consumer
            </button>

          </div>

        </div>

        <div
          id="analysisResult"
          style="
            margin-top:25px;
            padding:25px;
            border:1px solid #283142;
            border-radius:12px;
          "
        >

          <span class="panel-label">
            ANALYSIS RESULT
          </span>

          <h3 style="margin-top:12px">
            Ready for Analysis
          </h3>

          <p style="margin-top:8px">
            Enter a Consumer ID and click
            <b>Analyze Consumer</b>.
          </p>

        </div>

      </div>

    </section>
  `


  const analyzeButton =
    document.querySelector('#analyzeConsumerBtn')


  analyzeButton.addEventListener('click', async () => {

    const consumerId =
      document.querySelector('#consumerIdInput').value.trim()


    if (consumerId === '') {

      alert('Please enter Consumer ID')

      return

    }


    const result =
      document.querySelector('#analysisResult')


    // Show loading

    result.innerHTML = `

      <span class="panel-label">
        AI ANALYSIS
      </span>

      <h3 style="margin-top:15px">
        ⏳ AI is analyzing...
      </h3>

      <p style="margin-top:8px">
        Connecting to AI service. Please wait.
      </p>

    `


    try {

      const response = await fetch(
        'https://ai-electricity-theft-detection.onrender.com/analyze',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            consumer_id: consumerId,
            consumption: 486,
            risk_score: 91
          })
        }
      )


      if (!response.ok) {

        throw new Error(
          'AI Service returned an error'
        )

      }


      const data = await response.json()


      result.innerHTML = `

        <span class="panel-label">
          AI ANALYSIS RESULT
        </span>

        <h3 style="margin-top:15px">
          Analysis Completed ✓
        </h3>

        <div style="
          margin-top:20px;
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
          gap:15px;
        ">

          <div class="stat-card">

            <span>Consumer ID</span>

            <h3>
              ${data.consumer_id}
            </h3>

          </div>


          <div class="stat-card">

            <span>Consumption</span>

            <h3>
              ${data.consumption} kWh
            </h3>

          </div>


          <div class="stat-card danger-card">

            <span>Risk Score</span>

            <h3>
              ${data.risk_score}%
            </h3>

          </div>

        </div>


        <div style="
          margin-top:20px;
          padding:20px;
          border:1px solid #283142;
          border-radius:10px;
        ">

          <strong>
            OpenAI Analysis
          </strong>

          <p style="
            margin-top:12px;
            white-space:pre-wrap;
            line-height:1.7;
          ">
            ${data.ai_analysis}
          </p>

        </div>

      `

    } catch (error) {

      console.error(error)


      result.innerHTML = `

        <span class="panel-label">
          ERROR
        </span>

        <h3 style="margin-top:15px">
          ❌ AI Analysis Failed
        </h3>

        <p style="margin-top:8px">
          Could not connect to the AI service.
        </p>

        <p style="margin-top:8px">
          Make sure the FastAPI service is running
          on port 8000.
        </p>

      `

    }

  })

}

// =====================================================
// ANALYTICS
// =====================================================

function analyticsPage() {

  main.innerHTML = `

    ${header('Analytics')}

    <section style="padding:30px">

      <div class="stats-grid">

        <div class="stat-card">

          <span>Total Energy</span>

          <h3>3,842 kWh</h3>

          <p class="positive">
            ↑ 6.4%
          </p>

        </div>


        <div class="stat-card">

          <span>Average Usage</span>

          <h3>549 kWh</h3>

          <p>
            Per day
          </p>

        </div>


        <div class="stat-card warning-card">

          <span>Suspicious Usage</span>

          <h3>184</h3>

          <p class="warning-text">
            Cases
          </p>

        </div>


        <div class="stat-card danger-card">

          <span>High Risk</span>

          <h3>67</h3>

          <p class="danger-text">
            Consumers
          </p>

        </div>

      </div>


      <div class="panel"
           style="padding:30px;margin-top:25px">

        <span class="panel-label">
          SYSTEM ANALYTICS
        </span>

        <h3 style="margin-top:10px">
          Electricity Intelligence Overview
        </h3>

        <p style="margin-top:15px">
          Analytics dashboard provides insights into
          consumption, abnormal usage and electricity
          theft detection patterns.
        </p>


        <div class="stats-grid"
             style="margin-top:25px">

          <div class="stat-card">
            <span>Detection Accuracy</span>
            <h3>94.6%</h3>
            <p class="positive">AI performance</p>
          </div>

          <div class="stat-card">
            <span>Alerts Generated</span>
            <h3>251</h3>
            <p class="warning-text">This month</p>
          </div>

        </div>

      </div>

    </section>
  `
}


// =====================================================
// ALERTS
// =====================================================

function alertsPage() {

  main.innerHTML = `

    ${header('Alerts')}

    <section style="padding:30px">

      <div class="stats-grid">

        <div class="stat-card danger-card">

          <span>High Risk Alerts</span>

          <h3>67</h3>

          <p class="danger-text">
            Immediate attention
          </p>

        </div>


        <div class="stat-card warning-card">

          <span>Suspicious Alerts</span>

          <h3>184</h3>

          <p class="warning-text">
            Requires review
          </p>

        </div>


        <div class="stat-card">

          <span>Resolved</span>

          <h3>129</h3>

          <p class="positive">
            Cases resolved
          </p>

        </div>


        <div class="stat-card">

          <span>Monitoring</span>

          <h3>11,982</h3>

          <p class="positive">
            Active meters
          </p>

        </div>

      </div>


      <div class="panel"
           style="padding:30px;margin-top:25px">

        <span class="panel-label">
          RECENT ALERTS
        </span>

        <h3 style="margin-top:10px">
          Electricity Theft Alerts
        </h3>


        <div class="consumer-table"
             style="margin-top:20px">

          <div class="table-row table-heading">

            <span>Consumer</span>
            <span>Area</span>
            <span>Risk Score</span>
            <span>Status</span>

          </div>


          <div class="table-row">

            <strong>CON1024</strong>

            <span>Nashik</span>

            <strong class="risk-number high-number">
              91%
            </strong>

            <span class="badge high-badge">
              High Risk
            </span>

          </div>


          <div class="table-row">

            <strong>CON1087</strong>

            <span>Pune</span>

            <strong class="risk-number high-number">
              84%
            </strong>

            <span class="badge high-badge">
              High Risk
            </span>

          </div>


          <div class="table-row">

            <strong>CON1121</strong>

            <span>Nashik</span>

            <strong class="risk-number medium-number">
              67%
            </strong>

            <span class="badge medium-badge">
              Review
            </span>

          </div>


          <div class="table-row">

            <strong>CON1156</strong>

            <span>Mumbai</span>

            <strong class="risk-number medium-number">
              54%
            </strong>

            <span class="badge medium-badge">
              Review
            </span>

          </div>

        </div>

      </div>

    </section>
  `
}


// =====================================================
// PAGE ROUTER
// =====================================================

function showPage(page) {

  if (page === 'Dashboard') {
    dashboardPage()
    return
  }

  if (page === 'Consumers') {
    consumersPage()
    return
  }

  if (page === 'Consumption') {
    consumptionPage()
    return
  }

  if (page === 'AI Analysis') {
    aiAnalysisPage()
    return
  }

  if (page === 'Analytics') {
    analyticsPage()
    return
  }

  if (page === 'Alerts') {
    alertsPage()
    return
  }

}


// =====================================================
// START APPLICATION
// =====================================================

showPage('Dashboard')