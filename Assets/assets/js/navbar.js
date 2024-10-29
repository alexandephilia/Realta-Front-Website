 // Function to handle dropdown display
 function handleDropdown(dropdownId, contentId) {
    const dropdown = document.getElementById(dropdownId);
    const megaDropdown = document.getElementById(contentId);
    let dropdownTimeout;

    function addArrowSpan() {
        if (!dropdown.querySelector('.dropdown-arrow')) {
            const arrowSpan = document.createElement('span');
            arrowSpan.className = 'dropdown-arrow';
            dropdown.appendChild(arrowSpan);
        }
    }

    function removeArrowSpan() {
        const arrowSpan = dropdown.querySelector('.dropdown-arrow');
        if (arrowSpan) {
            arrowSpan.remove();
        }
    }

    function closeOtherDropdowns() {
        document.querySelectorAll('.mega-dropdown').forEach(el => {
            if (el.id !== contentId) {
                el.style.display = 'none';
                const otherDropdown = el.previousElementSibling;
                if (otherDropdown) {
                    const otherArrowSpan = otherDropdown.querySelector('.dropdown-arrow');
                    if (otherArrowSpan) otherArrowSpan.remove();
                }
            }
        });
    }

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        closeOtherDropdowns();
        megaDropdown.style.display = 'block';
        addArrowSpan();
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            megaDropdown.style.display = 'none';
            removeArrowSpan();
        }, 100); // Reduced delay
    });

    megaDropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
    });

    megaDropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            megaDropdown.style.display = 'none';
            removeArrowSpan();
        }, 100); // Reduced delay
    });
}

// ... rest of the code remains the same

// Function to handle category selection
function handleCategories(containerSelector, detailsId, content) {
    const categories = document.querySelectorAll(`${containerSelector} .product-category`);
    const details = document.getElementById(detailsId);

    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            const productType = this.getAttribute('data-product');
            details.innerHTML = content[productType];
        });
    });

    // Initialize with first category content
    if (categories.length > 0) {
        const firstProductType = categories[0].getAttribute('data-product');
        details.innerHTML = content[firstProductType];
    }
}

// Solusi dropdown
handleDropdown('solutionsDropdown', 'solutionsDropdownContent');
handleCategories('#solutionsDropdownContent', 'product-details', {
    eam: `
    <div class="product-banner" style="background-image: url('assets/img/eam.jpg');" onclick="navigateWithLoading('erp-micro.html');">                
        <div class="glare"></div>
        <div class="product-banner-content">
            <h2 class="product-title">EAM & ERP</h2>
            <p class="product-banner-description">Streamline Your Business Operations.</p>
        </div>
    </div>
    <div class="modules-title">KEY FEATURES</div>
    <div class="modules-grid">
        <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">ERP</h4>
            <div class="bento-wrapper">
                <div class="bento-grid">
                    <div class="bento-item large">
                        <p class="feature-description" style="text-align: center; font-size: 15px;">
                            <strong style="display: block; margin-bottom: 2px;">Enterprise Resource Planning</strong>
                            <span style="display: block; width: 95%; margin: 0 auto;">Integrate core business processes.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Finance</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-users"></i>
                        <span>HR</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-truck"></i>
                        <span>Supply Chain</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-cogs"></i>
                        <span>Manufacturing</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-project-diagram"></i>
                        <span>Project Management</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="module" style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0; border-radius: 0; background: none;">
            <h4 style="text-align: center; font-size: 16px;">EAM & WMS</h4>
            <div class="bento-wrapper">
                <div class="bento-grid">
                    <div class="bento-item large" style="grid-column: 1 / -1;">
                        <p style="font-size: 15px; margin: 0;"><span style="font-weight: bold;">Asset & Warehouse Management</span> Optimize your resources and inventory.</p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-tools"></i>
                        <span>Maintenance</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-clipboard-check"></i>
                        <span>Inventory</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-barcode"></i>
                        <span>Fulfillment</span>
                    </div>
                    <div class="bento-item full-width">
                        <i class="fas fa-dolly"></i>
                        <span>Warehouse Operations</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">Business Intelligence</h4>
            <div class="bento-wrapper">
                <div class="bento-grid">
                    <div class="bento-item">
                        <i class="fas fa-chart-pie"></i>
                        <span>Data Visualization</span>
                    </div>
                    <div class="bento-item large">
                        <p class="feature-description" style="text-align: center; font-size: 15px; margin: 0;">
                            <strong style="display: block; margin-bottom: 3px;">Analytics & Reporting</strong>
                            <span style="display: block; width: 80%; margin: 0 auto;">Make data-driven decisions.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-database"></i>
                        <span>Data Warehousing</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-robot"></i>
                        <span>Predictive Analytics</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>KPI Dashboards</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-file-alt"></i>
                        <span>Custom Reports</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .bento-wrapper {
            padding: 10px;
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto;
            background-color: #f7f4f482;
            border-radius: 15px;
            padding: 15px;
            transition: all 0.3s ease;
        }

        .bento-grid:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            background-color: #fff;
        }

        .bento-item {
            background: none;
            padding: 10px;
            border-radius: 15px;
            font-size: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
            box-shadow: none;
        }

        .bento-item:hover {
            transform: none;
            box-shadow: none;
        }

        .bento-item i {
            font-size: 15px;
            margin-bottom: 5px;
            color: #3A6D8C;
            animation: fadeIn 0.5s ease-out 0.2s forwards;
            opacity: 0;
        }

        .bento-item span {
            display: block;
            line-height: 1.1;
            font-size: 0.9rem; /* Base font size */
        }

        .large {
            grid-column: span 2;
            grid-row: span 2;
            font-size: 15px;
        }

        .full-width {
            grid-column: 1 / -1;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Responsive styles */
        @media (max-width: 768px) {
            .bento-grid {
                gap: 6px;
                padding: 10px;
            }

            .bento-item {
                padding: 8px;
            }

            .bento-item span {
                font-size: 0.8rem;
            }

            .bento-item i {
                font-size: 13px;
            }

            .feature-description {
                font-size: 13px !important;
            }

            .feature-description strong {
                font-size: 14px;
            }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            .bento-item span {
                font-size: 0.85rem;
            }
        }

        @media (min-width: 1025px) {
            .bento-item span {
                font-size: 0.75rem;
            }

            .feature-description {
                font-size: 13px !important;
            }
        }
    </style>
    `,
    hms: `
    <div class="product-banner" style="background-image: url('assets/img/hotel.jpg');" onclick="navigateWithLoading('rhapsody-micro.html');">   
        <div class="glare"></div>
        <div class="product-banner-content">
            <h2 class="product-title">Hotel Management System</h2>
            <p class="product-banner-description">To Orchestrate Your Entire Hotel Operation.</p>
        </div>
    </div>
    <div class="modules-title">KEY FEATURES</div>
    <div class="modules-grid">
            <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">Front Office</h4>
            <div class="bento-grid">
                <div class="bento-item large">
                    <p class="feature-description" style="text-align: center; font-size: 15px;">
                        <strong style="display: block; margin-bottom: 2px;">Front Office operations</strong>
                        <span style="display: block; width: 95%; margin: 0 auto;">simplify guest services and reception tasks.</span>
                    </p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-glass-cheers"></i>
                    <span>Sales & Banquet</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-calendar-check"></i>
                    <span>Reservation</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-door-open"></i>
                    <span>Check-in/Out</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-tags"></i>
                    <span>Dynamic Pricing</span>
                </div>
                <div class="bento-item">
                <i class="fas fa-cash-register"></i>
                    <span>Point Of Sales </span>

                </div>
                <div class="bento-item full-width">
                  <i class="fas fa-broom"></i>
                    <span>Housekeeping</span>

                </div>
            </div>
        </div>
            <div class="module" style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0; border-radius: 0; background: none;">
    <h4 style="text-align: center; font-size: 16px;">Logistic</h4>
    <div style="max-width: 300px; margin: 0 auto;">
        <div class="bento-item large" style="width: 100%; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
            <p style="font-size: 15px; margin: 0;"><span style="font-weight: bold;">Optimize inventory</span> and supply chain management.</p>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <div class="bento-item" style="width: 30%; padding: 15px; border-radius: 10px; text-align: center;">
                <i class="fas fa-shopping-cart" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                <span style="display: block; font-size: 15px;">Purchasing</span>
            </div>
            <div class="bento-item" style="width: 30%; padding: 15px; border-radius: 10px; text-align: center;">
                <i class="fas fa-box" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                <span style="display: block; font-size: 15px;">Receiving</span>
            </div>
            <div class="bento-item" style="width: 30%; padding: 15px; border-radius: 10px; text-align: center;">
                <i class="fas fa-warehouse" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                <span style="display: block; font-size: 15px;">Inventory</span>
            </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 15px;">
            <div class="bento-item" style="width: 40%; padding: 15px; border-radius: 10px; text-align: center;">
                <i class="fas fa-chart-line" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                <span style="display: block; font-size: 15px;">Cost Control</span>
            </div>
            <div class="bento-item" style="width: 40%; padding: 15px; border-radius: 10px; text-align: center;">
                <i class="fas fa-utensils" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                <span style="display: block; font-size: 15px;">Recipe</span>
            </div>
        </div>
    </div>
</div>
            <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">Back Office</h4>
            <div class="bento-grid">
                <div class="bento-item">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Accounts</span>
                </div>
                <div class="bento-item large" style="display: flex; align-items: center; justify-content: center; width: 94%; margin: 0 auto;">
                    <p class="feature-description" style="text-align: center; font-size: 15px; margin: 0;">
                        <strong style="display: block; margin-bottom: 3px;">Back Office operations</strong>
                        <span style="display: block; width: 80%; margin: 0 auto;">improve operations and financial management.</span>
                    </p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-money-check-alt"></i>
                    <span>Receivable</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-file-invoice"></i>
                    <span>Accounts Payable</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-landmark"></i>
                    <span>Cash & Bank</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-building"></i>
                    <span>Fixed Asset</span>
                </div>
                <div class="bento-item full-width">
                    <i class="fas fa-book"></i>
                    <span>General Ledger</span>
                </div>
            </div>
        </div>
    </div>
    <style>
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .bento-item {
            background-color: #e8e3e382;
            padding: 10px;
            border-radius: 15px;
            font-size: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
        }
        .bento-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .bento-item i {
            font-size: 1.3em;
            margin-bottom: 5px;
            color: rgb(99, 50, 155);
            animation: fadeIn 0.5s ease-out 0.2s forwards;
            opacity: 0;
        }
        .bento-item span {
            display: block;
            line-height: 1.1;
        }
        .large {
            grid-column: span 2;
            grid-row: span 2;
            font-size: 15px;
        }
        .full-width {
            grid-column: 1 / -1;
        }
    </style>
`,
    gcs: `
    <div class="product-banner" style="background-image: url('assets/img/gold.jpg');" onclick="navigateWithLoading('golf-micro.html');">                
        <div class="glare"></div>
        <div class="product-banner-content">
            <h2 class="product-title">Golf Course System</h2>
            <p class="product-banner-description">Supporting The Golfer's Journey On and Off The Course.</p>
        </div>
    </div>
    <div class="modules-title">KEY FEATURES</div>
    <div class="modules-grid">
            <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">Membership</h4>
            <div class="bento-grid">
                <div class="bento-item large">
                    <p class="feature-description" style="text-align: center; font-size: 15px;">
                        <strong style="display: block; margin-bottom: 2px;">Membership Management</strong>
                        <span style="display: block; width: 95%; margin: 0 auto;">with our unified platform.</span>
                    </p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-user-plus"></i>
                    <span>Member Profile</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Invoicing</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>Activity Tracking</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-tags"></i>
                    <span>Class & Category</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-user-shield"></i>
                    <span>Member Status</span>
                </div>
            </div>
        </div>
            <div class="module" style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0; border-radius: 0; background: none;">
            <h4 style="text-align: center; font-size: 16px;">Golf Operation</h4>
            <div class="bento-grid" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: auto 1fr; max-width: 300px; margin: 0 auto; gap: 15px;">
                <div class="bento-item large" style="grid-column: 1 / -1; padding: 15px; border-radius: 10px;">
                    <p style="font-size: 15px; margin: 0;"><span style="font-weight: bold;">Streamline golf operations</span> with our integrated system.</p>
                </div>
                <div class="bento-item" style="padding: 15px; border-radius: 10px; text-align: center;">
                    <i class="fas fa-concierge-bell" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                    <span style="display: block; font-size: 15px;">Front Office</span>
                </div>
                <div class="bento-item" style="padding: 15px; border-radius: 10px; text-align: center;">
                    <i class="fas fa-leaf" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                    <span style="display: block; font-size: 15px;">Lawn Operations</span>
                </div>
                <div class="bento-item" style="padding: 15px; border-radius: 10px; text-align: center;">
                    <i class="fas fa-chart-line" style="font-size: 1.5em; margin-bottom: 5px;"></i>
                    <span style="display: block; font-size: 15px;">Back Office</span>
                </div>
            </div>
        </div>
            <div class="module" style="background: none;">
            <h4 style="text-align: center; font-size: 16px;">Tournament</h4>
            <div class="bento-grid">
                <div class="bento-item">
                    <i class="fas fa-trophy"></i>
                    <span>Leaderboard</span>
                </div>
                <div class="bento-item large" style="display: flex; align-items: center; justify-content: center; width: 94%; margin: 0 auto;">
                    <p class="feature-description" style="text-align: center; font-size: 15px; margin: 0;">
                        <strong style="display: block; margin-bottom: 3px;">Tournament <br> Management</strong>
                        <span style="display: block; width: 80%; margin: 0 auto;">your all-in-one golf event solution.</span>
                    </p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-users"></i>
                    <span>Pairing</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-golf-ball"></i>
                    <span>Handicap</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-clipboard-list"></i>
                    <span>Scoring Method</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>Analytics</span>
                </div>
            </div>
        </div>
    </div>
    <style>
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .bento-item {
            background-color: #f7f4f482;
            padding: 10px;
            border-radius: 15px;
            font-size: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
        }
        .bento-item:hover {
            transform: translateY(2px);
            box-shadow: 0 1px 5px rgba(0,0,0,0.2);
        }
        .bento-item i {
            font-size: 1.3em;
            margin-bottom: 5px;
            color: rgb(0, 128, 0);
            animation: fadeIn 0.5s ease-out 0.2s forwards;
            opacity: 0;
        }
        .bento-item span {
            display: block;
            line-height: 1.1;
        }
        .large {
            grid-column: span 2;
            grid-row: span 2;
            font-size: 15px;
        }
    </style>
`,
    hrs: `
        <div class="product-banner" style="background-image: url('assets/img/hr.jpg');" onclick="navigateWithLoading('hr-micro.html')">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">HR System</h2>
                <p class="product-banner-description">To Effectively Manage Human Resource.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module" style="background: none;">
                <h4 style="text-align: center; font-size: 16px;">HR Core</h4>
                <div class="bento-grid">
                    <div class="bento-item large">
                        <p class="feature-description" style="text-align: center; font-size: 15px;">
                            <strong style="display: block; margin-bottom: 2px;">HR operations</strong> <span style="display: block; width: 99%; margin: 0 auto;">with our integrated solution.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-id-card-alt"></i>
                        <span>Personnel</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-calendar-check"></i>
                        <span>Attendance</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Loan</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-heartbeat"></i>
                        <span>Medical</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Payroll</span>
                    </div>
                </div>
                <style>
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(3, 1fr);
                        gap: 8px;
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    /* Initial fade-in transition for bento items */
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    .bento-item {
                        background-color: #f7f4f482;
                        padding: 10px;
                        border-radius: 15px;
                        font-size: 15px;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        animation: fadeIn 0.5s ease-out forwards;
                        opacity: 0;
                        /* Add a noticeable shadow box */
                    }
                    .bento-item:hover {
                        transform: translateY(2px);
                        box-shadow: 0 1px 5px rgba(0,0,0,0.2);
                    }
                    .bento-item i {
                        font-size: 1.3em;
                        margin-bottom: 5px;
                        color: rgb(139, 0, 69);
                        animation: fadeIn 0.5s ease-out 0.2s forwards;
                        opacity: 0;
                    }
                    .bento-item span {
                        display: block;
                        line-height: 1.1;
                    }
                    .large {
                        grid-column: span 2;
                        grid-row: span 2;
                        font-size: 15px;
                    }
                </style>
            </div>
            <div class="module" style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0; border-radius: 0; background: none;">
                   <h4 style="text-align: center; font-size: 16px;">HR Advance</h4>
                <div class="bento-grid" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: auto repeat(2, 1fr); max-width: 250px; margin: 0 auto;">
                    <div class="bento-item large" style="grid-column: 1 / -1;">
                        <p style="font-size: 15px;"><span style="font-weight: bold;">HR Advance</span>with our unified platform.</p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-user-plus"></i>
                        <span>Recruitment</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-briefcase"></i>
                        <span>Job Competency</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Training</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Performance</span>
                    </div>
                </div>
            </div>
            <div class="module" style="background: none;">
                 <h4 style="text-align: center; font-size: 16px;">HR Mobile</h4>
               <div class="bento-grid">
                
                    <div class="bento-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Locations</span>
                    </div>
                       <div class="bento-item large" style="display: flex; align-items: center; justify-content: center; width: 94%; margin: 0 auto;">
                        <p class="feature-description" style="text-align: center; font-size: 15px; margin: 0;">
                            <strong style="display: block; margin-bottom: 2px;">Employee Self <br> Service</strong>
                            <span style="display: block; width: 80%; margin: 0 auto;">Empower HR with our ESS app.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-eye"></i>
                        <span>Monitoring</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Request</span>
                    </div>
                    
                    <div class="bento-item">
                        <i class="fas fa-calendar-check"></i>
                        <span>Reminder</span>
                    </div>
                    
                    <div class="bento-item">
                        <i class="fas fa-bell"></i>
                        <span>Notification</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    pts: `
    <div class="product-banner" style="background-image: url('assets/img/property.jpg');" onclick="navigateWithLoading('bimasakti-micro.html');">                
        <div class="glare"></div>
        <div class="product-banner-content">
            <h2 class="product-title">Property & Tenancy System</h2>
            <p class="product-banner-description">Design specifically to help today's Building Management work more efficiently and effectively.</p>
        </div>
    </div>
    <div class="modules-title">KEY FEATURES</div>
    <div class="modules-grid">
        <div class="module" style="background: none;">
            <h4 style="text-align: center;">Sales & Marketing</h4>
            <div class="bento-grid" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: auto repeat(2, 1fr); max-width: 250px; margin: 0 auto;">
                <div class="bento-item large" style="grid-column: 1 / -1;">
                    <p style="font-size: 15px; text-align: center;">
                        <span style="font-weight: bold; display: block;">Boost Your Sales</span>
                       with our comprehensive, integrated solution.
                    </p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-handshake"></i>
                    <span>Strata Release</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-home"></i>
                    <span>Handover</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-thumbs-up"></i>
                    <span>Fitting Out</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-file-contract"></i>
                    <span>Lease Renewal</span>
                </div>
            </div>
        </div>
        <div class="module" style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0; border-radius: 0; background: none;">
            <h4 style="text-align: center;">Tenancy</h4>
            <div class="bento-grid" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: auto repeat(2, 1fr); max-width: 250px; margin: 0 auto;">
                <div class="bento-item large" style="grid-column: 1 / -1;">
                    <p style="font-size: 15px;"><span style="font-weight: bold;">Tenancy Management</span> with our comprehensive, user-friendly platform.</p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-database"></i>
                    <span>Tenant Database</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span>Service Charge</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-coins"></i>
                    <span>Sinking Fund</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-bolt"></i>
                    <span>Utilities</span>
                </div>
            </div>
        </div>
        <div class="module" style="background: none;">
            <h4 style="text-align: center;">Billing</h4>
            <div class="bento-grid" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: auto repeat(2, 1fr); max-width: 250px; margin: 0 auto;">
                <div class="bento-item large" style="grid-column: 1 / -1;">
                    <p style="font-size: 15px;"><span style="font-weight: bold;">Billing Management</span> with our efficient handling of billing and payments.</p>
                </div>
                <div class="bento-item">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Down Payment</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Installment</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-bolt"></i>
                    <span>Utilities</span>
                </div>
                <div class="bento-item">
                    <i class="fas fa-cogs"></i>
                    <span>Others</span>
                </div>
            </div>
        </div>
    </div>
    <style>
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
            max-width: 300px;
            margin: 0 auto;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .bento-item {
            background-color: #f7f4f482;
            padding: 10px;
            border-radius: 15px;
            font-size: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
        }
        .bento-item h4 {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .bento-item:hover {
            transform: translateY(2px);
            box-shadow: 0 1px 5px rgba(0,0,0,0.2);
        }
        .bento-item i {
            font-size: 1.3em;
            margin-bottom: 5px;
            color: rgb(0, 128, 128);
            animation: fadeIn 0.5s ease-out 0.2s forwards;
            opacity: 0;
        }
        .bento-item span {
            display: block;
            line-height: 1.1;
        }
        .large {
            grid-column: span 2;
            grid-row: span 2;
            font-size: 0.85em;
        }
    </style>
`,
    itm: `
        <div class="product-banner" style="background-image: url('assets/img/it-management.jpg');" onclick="navigateWithLoading('itsm-micro.html')">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">ITSM, ITAM & Unified Endpoint Management</h2>
                <p class="product-banner-description">Comprehensive IT management solutions for your organization.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <i class="fas fa-sitemap" style="margin-right: 10px; background: linear-gradient(45deg, #FF0000, #0000FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Service Management</h4>
                <p>Streamline IT service delivery and support</p>
            </div>
            <div class="module">
                <i class="fas fa-database" style="margin-right: 10px; background: linear-gradient(45deg, #FF3333, #3333FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Asset Management</h4>
                <p>Track and manage IT assets throughout their lifecycle</p>
            </div>
            <div class="module">
                <i class="fas fa-shield-alt" style="margin-right: 10px; background: linear-gradient(45deg, #FF6666, #6666FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Endpoint Management</h4>
                <p>Centrally manage and secure all your endpoints</p>
            </div>
        </div>
    `,
    erp: `
            <div class="product-banner" style="background-image: url('assets/img/erp.jpg');" onclick="navigateWithLoading('realnet-micro.html')">
              
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Network & System Integration</h2>
                <p class="product-banner-description">One Solution concept, a strategic approach that skillfully blends various IT elements into a streamlined and efficient framework that is precisely tailored to each client's specific needs.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <i class="fas fa-microchip" style="margin-right: 10px; background: linear-gradient(45deg, #8A2BE2, #FFA500); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Hardware & Software</h4>
                <p>Comprehensive solutions for selecting, deploying, and managing IT hardware and software tailored to your business needs</p>
            </div>
            <div class="module">
                <i class="fas fa-network-wired" style="margin-right: 10px; background: linear-gradient(45deg, #8A2BE2, #FFA500); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Network</h4>
                <p>Robust network solutions designed to ensure seamless connectivity, performance, and security across your entire business ecosystem</p>
            </div>
            <div class="module">
                <i class="fas fa-cloud-upload-alt" style="margin-right: 10px; background: linear-gradient(45deg, #8A2BE2, #FFA500); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <h4>Cloud Infrastructure</h4>
                <p>Scalable cloud solutions that provide secure and flexible environments for hosting and managing your applications and data</p>
            </div>
        </div>
    `
});
// Industry dropdown
handleDropdown('industriDropdown', 'industriDropdownContent');
handleCategories('#industriDropdownContent', 'industri-details', {
    hospitality: `
        <div class="product-banner" style="background-image: url('assets/img/hospitality.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Hospitality Solutions</h2>
                <p class="product-banner-description">Elevate guest experiences with our comprehensive hospitality management systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Reservation Management</h4>
                <p>Streamline bookings and optimize occupancy rates</p>
            </div>
            <div class="module">
                <h4>Guest Services</h4>
                <p>Enhance guest satisfaction with personalized services</p>
            </div>
            <div class="module">
                <h4>Revenue Management</h4>
                <p>Maximize revenue with dynamic pricing strategies</p>
            </div>
        </div>
    `,
    property: `
        <div class="product-banner" style="background-image: url('assets/img/property.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Property Management Solutions</h2>
                <p class="product-banner-description">Optimize property operations and tenant satisfaction with our advanced systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Lease Management</h4>
                <p>Efficiently manage contracts and renewals</p>
            </div>
            <div class="module">
                <h4>Maintenance Tracking</h4>
                <p>Streamline property maintenance and repairs</p>
            </div>
            <div class="module">
                <h4>Tenant Portal</h4>
                <p>Enhance communication and service delivery</p>
            </div>
        </div>
    `,
    manufacturing: `
        <div class="product-banner" style="background-image: url('assets/img/manu.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Manufacturing Solutions</h2>
                <p class="product-banner-description">Optimize your manufacturing processes with our cutting-edge solutions.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Production Planning</h4>
                <p>Streamline production schedules and resource allocation</p>
            </div>
            <div class="module">
                <h4>Quality Control</h4>
                <p>Ensure product quality with advanced monitoring tools</p>
            </div>
            <div class="module">
                <h4>Supply Chain Management</h4>
                <p>Optimize inventory and supplier relationships</p>
            </div>
        </div>
    `,
    fsi: `
        <div class="product-banner" style="background-image: url('assets/img/fsi.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Financial Services Solutions</h2>
                <p class="product-banner-description">Enhance financial operations and security with our advanced systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Risk Management</h4>
                <p>Advanced tools for identifying and mitigating financial risks</p>
            </div>
            <div class="module">
                <h4>Compliance Monitoring</h4>
                <p>Ensure adherence to regulatory requirements</p>
            </div>
            <div class="module">
                <h4>Transaction Processing</h4>
                <p>Efficient and secure handling of financial transactions</p>
            </div>
        </div>
    `
});

// Partner dropdown
handleDropdown('partnerDropdown', 'partnerDropdownContent');
handleCategories('#partnerDropdownContent', 'partner-details', {
    reseller: `
        <div class="product-banner" style="background-image: url('assets/img/partnership.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Reseller Program</h2>
                <p class="product-banner-description">Join our network of successful resellers and grow your business.</p>
            </div>
        </div>
        <div class="modules-title">PROGRAM BENEFITS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Competitive Pricing</h4>
                <p>Access to exclusive reseller discounts</p>
            </div>
            <div class="module">
                <h4>Marketing Support</h4>
                <p>Comprehensive marketing materials and training</p>
            </div>
            <div class="module">
                <h4>Technical Assistance</h4>
                <p>Dedicated support for your technical queries</p>
            </div>
        </div>
    `,
    technology: `
        <div class="product-banner" style="background-image: url('assets/img/technology-partners.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Technology Partners</h2>
                <p class="product-banner-description">Collaborate with us to create innovative solutions for the market.</p>
            </div>
        </div>
        <div class="modules-title">PARTNERSHIP BENEFITS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Joint Development</h4>
                <p>Collaborate on cutting-edge technology solutions</p>
            </div>
            <div class="module">
                <h4>Integration Support</h4>
                <p>Seamless integration with our existing platforms</p>
            </div>
            <div class="module">
                <h4>Co-marketing Opportunities</h4>
                <p>Expand your reach through joint marketing efforts</p>
            </div>
        </div>
    `
});

// Contact dropdown
handleDropdown('contactDropdown', 'contactDropdownContent');
handleCategories('#contactDropdownContent', 'contact-details', {
    business: `
        <div class="product-banner" style="background-image: url('assets/img/consult.png');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Business Consultation</h2>
                <p class="product-banner-description">Get in touch with our team for any inquiries or support.</p>
            </div>
        </div>
        <div class="modules-title">CONTACT OPTIONS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>General Inquiries</h4>
                <p>For general questions and information</p>
            </div>
            <div class="module">
                <h4>Technical Support</h4>
                <p>Get help with our products and services</p>
            </div>
            <div class="module">
                <h4>Business Partnerships</h4>
                <p>Explore collaboration opportunities</p>
            </div>
        </div>
    `,
    technical: `
        <div class="product-banner" style="background-image: url('assets/img/technical-support.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Technical Support</h2>
                <p class="product-banner-description">Expert assistance for all your technical inquiries and issues.</p>
            </div>
        </div>
        <div class="modules-title">CONTACT OPTIONS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Live Chat Support</h4>
                <p>Instant help from our technical experts</p>
            </div>
            <div class="module">
                <h4>Email Support</h4>
                <p>Detailed responses to complex technical queries</p>
            </div>
            <div class="module">
                <h4>Phone Support</h4>
                <p>Direct line to our technical support team</p>
            </div>
        </div>
    `
});

// Tentang Realta dropdown
handleDropdown('tentangRealtaDropdown', 'tentangRealtaDropdownContent');
handleCategories('#tentangRealtaDropdownContent', 'tentangRealta-details', {
    about: `
    <div class="product-banner" style="background-image: url('assets/img/tentang.jpg');" onclick="navigateWithLoading('about.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">About Realta</h2>
                <p class="product-banner-description">Discover our journey, values, and commitment to innovation.</p>
            </div>
        </div>
        <div class="modules-title">OUR STORY</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Our Mission</h4>
                <p>Empowering businesses through technology</p>
            </div>
            <div class="module">
                <h4>Our Team</h4>
                <p>Meet the experts behind our solutions</p>
            </div>
            <div class="module">
                <h4>Our Achievements</h4>
                <p>Milestones that define our success</p>
            </div>
        </div>
    `,
    
});

// Career dropdown
handleDropdown('careerDropdown', 'careerDropdownContent');
handleCategories('#careerDropdownContent', 'career-details', {
    openings: `
         <div class="product-banner" style="background-image: url('assets/img/career.png');" onclick="navigateWithLoading('career.html');">       
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Careers at Realta</h2>
                <p class="product-banner-description">Join our team and shape the future of technology.</p>
            </div>
        </div>
        <div class="modules-title">WHY JOIN US</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Innovation-Driven Culture</h4>
                <p>Be part of cutting-edge technology development</p>
            </div>
            <div class="module">
                <h4>Professional Growth</h4>
                <p>Continuous learning and career advancement opportunities</p>
            </div>
            <div class="module">
                <h4>Work-Life Balance</h4>
                <p>Flexible work arrangements and comprehensive benefits</p>
            </div>
        </div>
    `,
    internships: `
        <div class="product-banner" style="background-image: url('assets/img/internships.jpg');" onclick="navigateWithLoading('internships.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Internship Programs</h2>
                <p class="product-banner-description">Kickstart your career with hands-on experience at Realta.</p>
            </div>
        </div>
        <div class="modules-title">PROGRAM HIGHLIGHTS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Tech Internships</h4>
                <p>Gain practical experience in software development</p>
            </div>
            <div class="module">
                <h4>Business Internships</h4>
                <p>Learn about tech business operations</p>
            </div>
            <div class="module">
                <h4>Design Internships</h4>
                <p>Contribute to user experience and interface design</p>
            </div>
        </div>
    `,
    culture: `
        <div class="product-banner" style="background-image: url('assets/img/company-culture.jpg');" onclick="navigateWithLoading('company-culture.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Company Culture</h2>
                <p class="product-banner-description">Discover what makes Realta a great place to work.</p>
            </div>
        </div>
        <div class="modules-title">OUR VALUES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Innovation</h4>
                <p>We encourage creative thinking and new ideas</p>
            </div>
            <div class="module">
                <h4>Collaboration</h4>
                <p>Teamwork is at the heart of our success</p>
            </div>
            <div class="module">
                <h4>Growth</h4>
                <p>We invest in our employees' personal and professional development</p>
            </div>
        </div>
    `
});



// NAV SHRINK

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var scrollThreshold = 50; // Adjust this value as needed
    var debounceTimer;
    var resizeTimer;

    function debounce(func, delay) {
        return function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(func, delay);
        };
    }

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
                // Force a reflow before adding the 'animating' class
                void navbar.offsetWidth;
                navbar.classList.add('animating');
            }
        } else {
            if (navbar.classList.contains('scrolled')) {
                navbar.classList.remove('scrolled');
                // Force a reflow before adding the 'animating' class
                void navbar.offsetWidth;
                navbar.classList.add('animating');
            }
        }
    }


    function handleResize() {
        navbar.classList.add('resizing');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            navbar.classList.remove('resizing');
        }, 300);
    }

    window.addEventListener('scroll', debounce(handleScroll, 10));
    window.addEventListener('resize', debounce(handleResize, 100));

    // Remove the 'animating' class after the transition is complete
    navbar.addEventListener('transitionend', function() {
        navbar.classList.remove('animating');
    });
});


// LANG
document.getElementById('languageSwitch').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    const dropdownMenu = document.querySelector('.custom-dropdown-menu');
    if (dropdownMenu && dropdownMenu.style.display === 'block' && !e.target.closest('.custom-dropdown')) {
        dropdownMenu.style.display = 'none';
    }
});

document.querySelectorAll('.custom-dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        // Implement your language change logic here
        console.log('Changing language to:', lang);
        document.querySelector('.custom-dropdown-menu').style.display = 'none';
    });
});



