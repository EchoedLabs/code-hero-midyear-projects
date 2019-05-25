let isDoorOpen = false;
  const openedDoorImage = 'img/opened-door.jpg';
  const closedDoorImage = 'img/closed-door.jpg';

  const toggleDoor = () => {
    if (isDoorOpen) {
      isDoorOpen = false;
      document.getElementById('door-image').src = closedDoorImage;
      document.getElementById('toggle-door-button').innerHTML = 'OPEN THE DOOR';
      document.getElementById('toggle-door-button').className = 'btn btn-success';
    } else {
      isDoorOpen = true;
      document.getElementById('toggle-door-button').innerHTML = 'CLOSE THE DOOR';
      document.getElementById('door-image').src = openedDoorImage;
      document.getElementById('toggle-door-button').className = 'btn btn-danger';
    }
  }