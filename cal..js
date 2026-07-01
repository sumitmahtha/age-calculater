function generate() {
    const dob = document.getElementById("dob").value;
    if (!dob) return alert("Enter date");
  
    const birth = new Date(dob);
    const now = new Date();
  
    const diffMs = now - birth;
  
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44); // avg month
  
    const totalWeeks = 80 * 52; // life till 80 years
  
    // GRID
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
  
    for (let i = 0; i < totalWeeks; i++) {
      const div = document.createElement("div");
      div.classList.add("week");
  
      if (i < weeks) {
        div.classList.add("past");
      } else if (i === weeks) {
        div.classList.add("present");
      } else {
        div.classList.add("future");
      }
  
      grid.appendChild(div);
    }
  
    //  Heartbeats (avg 70 bpm)
    const heartbeats = Math.floor(days * 24 * 60 * 70);
  
    //  Breaths (avg 16 per min)
    const breaths = Math.floor(days * 24 * 60 * 16);
  
    //  Remaining life (till 80)
    const totalDaysLife = 80 * 365;
    const remainingDays = totalDaysLife - days;
    const remainingYears = (remainingDays / 365).toFixed(1);
  
    //  Sleep (10 hrs/day)
    const sleepHours = days * 7;
    const sleepYears = (sleepHours / (24 * 365)).toFixed(1);
  
    //  Mobile (5 hrs/day)
    const mobileHours = days * 5;
    const mobileYears = (mobileHours / (24 * 365)).toFixed(1);
  
    // OUTPUT
    document.getElementById("info").innerHTML = `
      <h3>Life Highlights</h3>
  
      <p>📅 You've lived <b>${weeks}</b> weeks (~${months} months)</p>
      <p>📆 ${days} days of experience</p>
  
      <p>❤️ Heartbeats: <b>${heartbeats.toLocaleString()}</b></p>
      <p>😮‍💨 Breaths: <b>${breaths.toLocaleString()}</b></p>
  
      <hr>
  
      <p>⏳ Remaining life: <b>${remainingYears} years</b> (~${remainingDays} days)</p>
  
      <p>😴 Time spent sleeping: <b>${sleepYears} years</b></p>
      <p>📱 Time spent on mobile: <b>${mobileYears} years</b></p>
    `;
  }