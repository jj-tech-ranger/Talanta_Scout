// TalantaScout Main JavaScript - Dynamic Multi-tier System

// Package hierarchy (from lowest to highest)
const PACKAGE_HIERARCHY = {
    'basic': 0,
    'bronze': 1,
    'silver': 2,
    'gold': 3,
    'platinum': 4
};

// Get current user's package tier from localStorage
function getCurrentPackageTier() {
    return localStorage.getItem('packageTier') || 'basic';
}

// Get current user's role
function getCurrentUserRole() {
    return localStorage.getItem('userRole') || 'player';
}

// Check if user has access to a feature based on package requirements
function hasPackageAccess(minPackage, maxPackage = 'platinum') {
    const current Tier = getCurrentPackageTier();
    const currentLevel = PACKAGE_HIERARCHY[currentTier];
    const minLevel = PACKAGE_HIERARCHY[minPackage];
    const maxLevel = PACKAGE_HIERARCHY[maxPackage];
    
    return currentLevel >= minLevel && currentLevel <= maxLevel;
}

// Initialize package-based features on page load
function initializePackageFeatures() {
    const currentTier = getCurrentPackageTier();
    console.log('Initializing features for package tier:', currentTier);
    
    // Find all elements with data-min-package attribute
    const featureElements = document.querySelectorAll('[data-min-package]');
    
    featureElements.forEach(element => {
        const minPackage = element.getAttribute('data-min-package');
        const maxPackage = element.getAttribute('data-max-package') || 'platinum';
        
        if (!hasPackageAccess(minPackage, maxPackage)) {
            // Lock feature
            element.classList.add('feature-locked');
            element.style.pointerEvents = 'none';
            
            // Add click handler to show upgrade prompt
            element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showUpgradePrompt(minPackage);
            });
        } else {
            // Feature is accessible
            element.classList.remove('feature-locked');
            element.style.pointerEvents = '';
        }
    });
    
    // Update package badge display
    updatePackageBadges();
}

// Update all package badges on the page
function updatePackageBadges() {
    const currentTier = getCurrentPackageTier();
    const badges = document.querySelectorAll('.package-badge.current-tier');
    
    badges.forEach(badge => {
        badge.textContent = currentTier.toUpperCase();
        badge.className = `package-badge ${currentTier} current-tier`;
    });
}

// Show upgrade prompt modal
function showUpgradePrompt(requiredPackage) {
    const modal = document.createElement('div');
    modal.className = 'upgrade-modal';
    modal.innerHTML = `
        <div class="upgrade-modal-content">
            <h3>🔒 Upgrade Required</h3>
            <p>This feature requires <strong>${requiredPackage.toUpperCase()}</strong> package or higher.</p>
            <p>Your current package: <span class="package-badge ${getCurrentPackageTier()}">${getCurrentPackageTier().toUpperCase()}</span></p>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="window.location.href='/#pricing'">View Pricing</button>
                <button class="btn btn-secondary" onclick="this.closest('.upgrade-modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Navigation menu active state
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a, .sidebar-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializePackageFeatures();
    setActiveNavItem();
    
    console.log('TalantaScout initialized');
    console.log('User Role:', getCurrentUserRole());
    console.log('Package Tier:', getCurrentPackageTier());
});
