
// Data

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

//Part 2 Functions List

  const printToDom = (stringToPrint, divId) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = stringToPrint;
  };

  const congressionalDistrictStringBuilder = () => {
        const newString = `<h1>Congressional District: ${elizabethSanger.congressionalDistrict}</h1>`;
        printToDom(newString, 'congressionalDistrict');
  };

  const statementsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.statements.length; i++){
      newString += `<div class='statement'>`;
      newString +=    `<h3>${elizabethSanger.statements[i].category}</h3>`;
      newString +=    `<h4>${elizabethSanger.statements[i].statement}</h4>`;
      newString += `</div>`;
    };
    printToDom(newString, 'statements');
};


  const donationFormUrlStringBuilder = () => {
      const newString = `<a href="https://${elizabethSanger.donationFormUrl}">Donation Form Here</a>`;
      printToDom(newString, 'donationForm');
  };

  const eventsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.events.length; i++) {
      newString += `<div class='events'>`;
      newString +=    `<h3>${elizabethSanger.events[i].title}</h3>`;
      newString +=    `<p>${elizabethSanger.events[i].date}</p>`;
      newString +=    `<p>${elizabethSanger.events[i].description}</p>`;
      newString += `</div>`
    };
    printToDom(newString, 'events');
  };

  const volunteersStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
      newString += `<div class='volunteers'>`;
      newString +=    `<h3>${elizabethSanger.volunteers[i].name}</h3>`;
      newString +=    `<p>Address: ${elizabethSanger.volunteers[i].address}</p>`;
      newString +=    `<p>Email: ${elizabethSanger.volunteers[i].email}</p>`;
      newString +=    `<p>Phone: ${elizabethSanger.volunteers[i].phone}</p>`;
      newString +=    `<p>Availability: ${elizabethSanger.volunteers[i].availability}</p>`;
      newString +=    `<p>Activities: ${elizabethSanger.volunteers[i].activities}</p>`;
      newString += `</div>`;
    };
    printToDom(newString, 'volunteers');
  };

  const biographyStringBuilder = () => {
    const newString = `<h3>Biography: ${elizabethSanger.biography}</h3>`;
    printToDom(newString, 'biography');
  };
 
  const imagesStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.images.length; i++) {
      newString += `<div class=images>`;
      newString +=    `<img src="${elizabethSanger.images[i].imageUrl}" alt="${elizabethSanger.images[i].type}">`;
      newString +=    `<p>${elizabethSanger.images[i].description}</p>`;
      newString += `</div>`;
    };
    printToDom(newString, 'images');
  }

  const missionStatementStringBuilder = () => {
    const newString = `<h3>Mission Statement: ${elizabethSanger.missionStatement}</h3>`;
    printToDom(newString, 'missionStatement');
  };

  const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}">Register to Vote Here</a>`;
    printToDom(newString, 'voterRegistration')
  };

  
  // Call Functions


  congressionalDistrictStringBuilder();
  statementsStringBuilder();
  donationFormUrlStringBuilder();
  eventsStringBuilder ();
  volunteersStringBuilder ();
  biographyStringBuilder();
  imagesStringBuilder();
  missionStatementStringBuilder ();
  voterRegistrationStringBuilder();
  
//Part 3 Update Functions List


    const updateCongressionalDistrict = (newNum) => {
      elizabethSanger.congressionalDistrict = newNum;
      congressionalDistrictStringBuilder();
    };

    const updateStatements = (newStatement, newCategory) => {
      let newObject = {statement: newStatement, category: newCategory};
      elizabethSanger.statements.push(newObject);
      statementsStringBuilder();
    };


    const updateDonationFormUrl = (newUrl) => {
      elizabethSanger.donationFormUrl = newUrl;
      donationFormUrlStringBuilder();
    };

    const updateEvents = (newDate, newTitle, newDescription) => {
      let newObject = {date: newDate, title: newTitle, description: newDescription};
      elizabethSanger.events.push(newObject);
      eventsStringBuilder();
    };

    const updateVolunteers = (newName, newAddress, newEmail, newPhone, newAvailability, newActivities) => {
      let newObject = {
        name: newName,
        address: newAddress,
        email: newEmail,
        phone: newPhone,
        availability: newAvailability,
        activities:newActivities
      };
      elizabethSanger.volunteers.push(newObject);
      volunteersStringBuilder();
    };

    

    const updateBiography = (newString) => {
      elizabethSanger.biography = newString;
      biographyStringBuilder();
    };

    const updateImages = (newImageUrl, newDescription, newType) => {
      let newObject = {imageUrl: newImageUrl,
        description: newDescription,
        type: newType};
      elizabethSanger.images.push(newObject);  
      imagesStringBuilder();
    };

    const updateMissionStatement = (newString) => {
      elizabethSanger.missionStatement = newString;
      missionStatementStringBuilder();
    };

    const updateVoterRegistration = (newUrl) => {
        elizabethSanger.voterRegistrationUrl = newUrl;
        voterRegistrationStringBuilder();
  }; 


  // Call Update Functions

  updateCongressionalDistrict('9');
  updateStatements('you have labor day off', 'Jobs');
  updateDonationFormUrl('yahoo.com');
  updateEvents('02/08/2019', 'My Birthday!', 'Invite all my friends to the party');
  updateVolunteers('Jasmine Walters', '123 Abby Road', 'jsmnwltrs@gmail.com', '555-555-5555', 'always available', 'eating food');
  updateBiography("I love food!");
  updateImages('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pnmejOGtG4yLFCN9L_cBxVO_-PfP7d7Ie4seEHargy4EZw5T9Q', 'Silly Dog', 'Dog');
  updateMissionStatement("Great job!!");
  updateVoterRegistration('yahoo.com')