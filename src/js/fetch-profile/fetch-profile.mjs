const currentProfile = () => {
  // Retrieve the profile information from localStorage
  const profileData = JSON.parse(localStorage.getItem('profile'));

  if (profileData) {
    const { name, avatar, credits } = profileData;

    const profileContainer = document.getElementById('myContainer');
    profileContainer.innerHTML = `
        <div class="auction-card"><h1>${name}</h1>
        <p>Your current credit is: ${credits}</p>
        <img src="${avatar}" alt="Avatar"></div>
      `;
  } else {
    console.log('Profile not found');
  }
};

currentProfile();
