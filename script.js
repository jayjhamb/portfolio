// Update time in menu bar
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    document.getElementById('current-time').textContent = timeString;
}

// Initialize time and update every second
updateTime();
setInterval(updateTime, 1000);

// Sidebar navigation functionality
document.querySelectorAll('.sidebar-item[data-section]').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all sidebar items
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const sectionId = item.getAttribute('data-section');
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
    });
});

// Window control interactions (demo functionality)
document.querySelector('.control-red').addEventListener('click', () => {
    if (confirm('Are you sure you want to close the portfolio?')) {
        document.querySelector('.window').style.transform = 'scale(0)';
        document.querySelector('.window').style.opacity = '0';
        setTimeout(() => {
            alert('Portfolio closed (demo mode)');
            document.querySelector('.window').style.transform = 'scale(1)';
            document.querySelector('.window').style.opacity = '1';
        }, 300);
    }
});

document.querySelector('.control-yellow').addEventListener('click', () => {
    const window = document.querySelector('.window');
    if (window.style.transform === 'scale(0.1)') {
        // Restore window
        window.style.transform = 'scale(1)';
        window.style.opacity = '1';
    } else {
        // Minimize window
        window.style.transform = 'scale(0.1)';
        window.style.opacity = '0.3';
        setTimeout(() => {
            window.style.transform = 'scale(1)';
            window.style.opacity = '1';
        }, 1000);
    }
});

document.querySelector('.control-green').addEventListener('click', () => {
    const window = document.querySelector('.window');
    const body = document.body;
    
    if (body.style.padding === '0px') {
        // Restore window
        body.style.padding = '20px';
        window.style.marginTop = '24px';
        window.style.height = 'calc(100vh - 40px)';
        window.style.borderRadius = '8px';
    } else {
        // Maximize window
        body.style.padding = '0px';
        window.style.marginTop = '24px';
        window.style.height = 'calc(100vh - 24px)';
        window.style.borderRadius = '0px';
    }
});

// Action button functionality
document.querySelector('.action-btn.primary').addEventListener('click', () => {
    // Open email client or show contact modal
    window.location.href = 'mailto:alex.chen@email.com?subject=Let\'s Chat - Portfolio Contact';
});

document.querySelector('.action-btn.secondary').addEventListener('click', () => {
    // Open resume (you would replace this with actual resume link)
    alert('Resume would open here. Replace with actual resume link.');
    // window.open('path/to/resume.pdf', '_blank');
});

// Quick action sidebar items
document.querySelectorAll('.sidebar-item:not([data-section])').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.textContent.trim();
        
        switch(text) {
            case 'Resume':
                alert('Resume would open here. Add your resume link.');
                // window.open('path/to/resume.pdf', '_blank');
                break;
            case 'LinkedIn':
                window.open('https://linkedin.com/in/alexchen', '_blank');
                break;
            case 'GitHub':
                window.open('https://github.com/alexchen', '_blank');
                break;
        }
    });
});

// Add smooth scrolling for content areas
document.querySelector('.content-area').addEventListener('scroll', () => {
    const scrolled = document.querySelector('.content-area').scrollTop;
    if (scrolled > 50) {
        document.querySelector('.window-header').style.background = 'linear-gradient(to bottom, #f8f8f8, #e8e8e8)';
    } else {
        document.querySelector('.window-header').style.background = 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)';
    }
});

// Add hover effects for interactive elements
document.querySelectorAll('.stat-card, .capability-card, .project-card, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + 1-4 to switch sections
    if ((e.metaKey || e.ctrlKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const sections = ['profile', 'projects', 'experience', 'contact'];
        const sectionIndex = parseInt(e.key) - 1;
        
        if (sections[sectionIndex]) {
            // Update sidebar
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            document.querySelector(`[data-section="${sections[sectionIndex]}"]`).classList.add('active');
            
            // Update content
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(sections[sectionIndex]).classList.add('active');
        }
    }
    
    // Escape to close (demo)
    if (e.key === 'Escape') {
        alert('ESC pressed - would minimize in real app');
    }
});

// Add loading animation (simulate app startup)
window.addEventListener('load', () => {
    document.querySelector('.window').style.opacity = '0';
    document.querySelector('.window').style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        document.querySelector('.window').style.transition = 'all 0.3s ease';
        document.querySelector('.window').style.opacity = '1';
        document.querySelector('.window').style.transform = 'scale(1)';
    }, 100);
});

// Tech skill hover effects with tooltips
document.querySelectorAll('.tech-skill').forEach(skill => {
    skill.addEventListener('mouseenter', (e) => {
        const level = skill.classList.contains('advanced') ? 'Advanced' : 'Intermediate';
        skill.title = `${skill.textContent} - ${level} level`;
    });
});

// Activity items click functionality
document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelector('.activity-text').textContent;
        alert(`More details about: ${text}\n\n(This would show more information in a real application)`);
    });
    
    // Add pointer cursor to show it's clickable
    item.style.cursor = 'pointer';
});

// Project card interactions
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = link.textContent;
        const projectName = link.closest('.project-card').querySelector('.project-name').textContent;
        
        if (linkText === 'Live Demo') {
            alert(`${projectName} live demo would open here.\n\nReplace with actual demo URL.`);
        } else if (linkText === 'GitHub') {
            alert(`${projectName} GitHub repository would open here.\n\nReplace with actual GitHub URL.`);
        }
    });
});

console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Keyboard shortcuts:');
console.log('   Cmd/Ctrl + 1-4: Switch sections');
console.log('   ESC: Minimize window');