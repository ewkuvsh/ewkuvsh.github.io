function toggleProject(projectElement) {
  const leftPanel = document.querySelector('.left-panel');
  const rightPanel = document.querySelector('.right-panel');
  
  // Close all other projects
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach(project => {
    if (project !== projectElement) {
      project.classList.remove('expanded');
    }
  });
  
  // Toggle the clicked project
  projectElement.classList.toggle('expanded');
  
  // Check if any project is expanded
  const hasExpandedProject = document.querySelector('.project.expanded');
  
  if (hasExpandedProject) {
    // A project is expanded - adjust panels
    leftPanel.classList.add('collapsed');
    rightPanel.classList.add('expanded');
  } else {
    // No projects expanded - reset to 1:1
    leftPanel.classList.remove('collapsed');
    rightPanel.classList.remove('expanded');
  }
}

// Close expanded projects when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.project')) {
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => {
      project.classList.remove('expanded');
    });
    
    // Reset panels to 1:1
    leftPanel.classList.remove('collapsed');
    rightPanel.classList.remove('expanded');
  }
});