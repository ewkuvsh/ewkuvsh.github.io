    function toggleProject(projectElement) {
      // Get all project elements
      const allProjects = document.querySelectorAll('.project');
      
      // Check if the clicked project is already expanded
      const isCurrentlyExpanded = projectElement.classList.contains('expanded');
      
      // Close all projects first
      allProjects.forEach(project => {
        project.classList.remove('expanded');
      });
      
      // If the clicked project wasn't expanded, expand it
      if (!isCurrentlyExpanded) {
        projectElement.classList.add('expanded');
      }
      
      // Update panel expansion states
      const leftPanel = document.querySelector('.left-panel');
      const rightPanel = document.querySelector('.right-panel');
      const anyExpanded = document.querySelector('.project.expanded');
      
      if (anyExpanded) {
        leftPanel.classList.add('collapsed');
        rightPanel.classList.add('expanded');
      } else {
        leftPanel.classList.remove('collapsed');
        rightPanel.classList.remove('expanded');
      }
    }