let events = [];

function addEvent() {
  let name = prompt("Enter event name:");
  let date = prompt("Enter event date (YYYY-MM-DD):");
  let time = prompt("Enter event time:");
  let description = prompt("Enter event description:");

  events.push({
    name: name,
    date: date,
    time: time,
    description: description,
  });

  console.log("Event added successfully!");
}

function removeEvent(eventName) {
  events = events.filter((event) => event.name !== eventName);
  console.log("Event removed successfully!");
}

function searchEventsByName(eventName) {
  return events.filter((event) => event.name.toLowerCase().includes(eventName.toLowerCase()));
}

function viewEvent(eventName) {
  const event = events.find((event) => event.name === eventName);
  if (event) {
    console.log("Event Name:", event.name);
    console.log("Date:", event.date);
    console.log("Time:", event.time);
    console.log("Description:", event.description);
  } else {
    console.log("Event not found!");
  }
}

function getLastEvent() {
  if (events.length > 0) {
    const lastEvent = events[events.length - 1];
    console.log("Last Event:");
    console.log("Event Name:", lastEvent.name);
    console.log("Date:", lastEvent.date);
    console.log("Time:", lastEvent.time);
    console.log("Description:", lastEvent.description);
  } else {
    console.log("No events found!");
  }
}

function searchEventsByDate(eventDate) {
  return events.filter((event) => event.date === eventDate);
}

function getTimeRemainingForNextEvent() {
  const now = new Date();
  const upcomingEvents = events.filter((event) => {
    const eventDateTime = new Date(`${event.date} ${event.time}`);
    return eventDateTime > now;
  });

  if (upcomingEvents.length > 0) {
    const nextEvent = upcomingEvents[0];
    const nextEventDateTime = new Date(`${nextEvent.date} ${nextEvent.time}`);
    const timeRemaining = nextEventDateTime - now;
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    console.log("Time Remaining for Next Event:");
    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  } else {
    console.log("No upcoming events found!");
  }
}

function exit() {
  console.log("Exiting...");
}

while (true) {
  let choice = prompt("Choose an option:\n1. Add Event\n2. Remove Event\n3. Search Events by Name\n4. View Event\n5. Get Last Event\n6. Search Events by Date\n7. Get Time Remaining for Next Event\n8. Exit");
  
  switch (choice) {
    case "1":
      addEvent();
      break;
    case "2":
      let eventNameToRemove = prompt("Enter event name to remove:");
      removeEvent(eventNameToRemove);
      break;
    case "3":
      let eventNameToSearch = prompt("Enter event name to search:");
      console.log(searchEventsByName(eventNameToSearch));
      break;
    case "4":
      let eventNameToView = prompt("Enter event name to view:");
      viewEvent(eventNameToView);
      break;
    case "5":
      getLastEvent();
      break;
    case "6":
      let eventDateToSearch = prompt("Enter event date to search (YYYY-MM-DD):");
      console.log(searchEventsByDate(eventDateToSearch));
      break;
    case "7":
      getTimeRemainingForNextEvent();
      break;
    case "8":
      exit();
      return;
    default:
      console.log("Invalid choice!");
  }
}
