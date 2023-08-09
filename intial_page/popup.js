// You can add your JavaScript logic here for tracking and displaying time data



//each time you are a new website, a timer for that website starts. When you move
//away from that website, you stop the timer and start a new timer or resume the timer
//of a previous website

//after the day ends, you take the top 5 websites times and add them in storage
//and by the end of the week,

// Example: Get current date and display it in the dailyStats element
const dailyStatsElement = document.getElementById('dailyStats');
const currentDate = new Date().toLocaleDateString();
dailyStatsElement.innerHTML = `<p>Today's Date: ${currentDate}</p>`;

// Retrieve and display daily statistics
chrome.storage.local.get('timeData', (result) => {
    const timeData = result.timeData || {};
    const today = new Date().toLocaleDateString();
  
    const dailyStatsElement = document.getElementById('dailyStats');
    dailyStatsElement.innerHTML = `<h2>Daily Statistics</h2>`;
  
    if (timeData[today]) {
      for (const url in timeData[today]) {
        const timeSpent = timeData[today][url];
        dailyStatsElement.innerHTML += `<p>${url}: ${timeSpent} ms</p>`;
      }
    } else {
      dailyStatsElement.innerHTML += `<p>No data available for today.</p>`;
    }
  });
  
  // Retrieve and display monthly comparison
  // You'll need to implement the logic for comparing with previous months
  


// Example: Display a simple message in the monthlyComparison element
const monthlyComparisonElement = document.getElementById('monthlyComparison');
monthlyComparisonElement.innerHTML = '<p>Monthly comparison data will be displayed here.</p>';