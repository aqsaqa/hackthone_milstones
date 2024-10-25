// Select the experience section and button
const lang_section = document.getElementById('lang_section');
const lang_btn = document.getElementById('lang_btn');

// Function to toggle visibility of the experience section
function toggleExperienceVisibility() {
    if (lang_section) {
        lang_section.style.display = lang_section.style.display === 'none' ? 'block' : 'none';
    }
}

// Event listener for the experience button
lang_btn?.addEventListener('click', toggleExperienceVisibility);
