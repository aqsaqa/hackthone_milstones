// Select the experience section and button
var lang_section = document.getElementById('lang_section');
var lang_btn = document.getElementById('lang_btn');
// Function to toggle visibility of the experience section
function toggleExperienceVisibility() {
    if (lang_section) {
        lang_section.style.display = lang_section.style.display === 'none' ? 'block' : 'none';
    }
}
// Event listener for the experience button
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener('click', toggleExperienceVisibility);
