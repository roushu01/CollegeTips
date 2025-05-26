document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    // Hide all sections
    document.querySelectorAll('.gallery, .Creative-Campaigns, .team-work, #bts-section').forEach(sec => {
      sec.classList.add('hidden');
    });

    // Show relevant section
    if (category === 'team') {
      document.querySelector('.gallery').classList.remove('hidden');
    } else if (category === 'campaigns') {
      document.querySelector('.Creative-Campaigns').classList.remove('hidden');
    } else if (category === 'fun') {
      document.querySelector('.team-work').classList.remove('hidden');
    } else if (category === 'bts') {
      document.querySelector('#bts-section').classList.remove('hidden');
    } else {
      document.querySelectorAll('.gallery, .Creative-Campaigns, .team-work, #bts-section').forEach(sec => {
        sec.classList.remove('hidden');
      });
    }
  });
});
