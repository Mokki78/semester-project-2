const currentProfile = () => {
  const profileData = JSON.parse(localStorage.getItem('profile'));

  if (profileData) {
    const { name, avatar, credits } = profileData;

    const profileContainer = document.getElementById('myContainer');
    profileContainer.innerHTML = `
        <div class="profile-card"><h1>${name}</h1>
        <h3>Your current credit is: ${credits}</h3>
      <img src="${avatar}" class="profile-image" alt="Avatar"></div>
      `;
  } else {
    console.log('Profile not found');
  }
};

currentProfile();
