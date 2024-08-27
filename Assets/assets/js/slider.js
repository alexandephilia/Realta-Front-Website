// SLIDER
function injectStyles() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
        .video-industry {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            overflow: hidden;
        }

        .video-industry::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .video-industry:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .video-industry:hover::before {
            opacity: 1;
        }

        .video-industry iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        @media (max-width: 768px) {
            .video-industry {
        padding-bottom: 56.25%; /* Maintain 16:9 aspect ratio */
    }
            .card-body {
                padding: 1rem;
            }
            .video-industry iframe {
                width: 100%;
                height: 100%;
                object-fit: cover; /* Ensure the video fills the container */
          }
            
            .industry-image {
                border-radius: 10px;
            }
        }

        .card-text, .card-body ul {
            font-size: 16px;
            color: #555;
        }
        .card-body ul {
            padding-left: 3rem; /* Increased padding to move bullets more to the right */
            font-size: 0.9rem;
        }
        .card-body li {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .card-title {
                font-size: 1.5rem;
            }
            .card-text, .card-body ul {
                font-size: 1rem;
            }
        }
    `;
  document.head.appendChild(styleElement);
}

// Call this function when your page loads or when you're adding the content
injectStyles();

const cardContents = {
    hospitality: `
        <style>
            .hospitality-grid {
                display: grid;
                grid-template-areas: 
                    "title"
                    "description"
                    "button"
                    "properties";
                gap: 15px;
                padding: 20px;
                border-radius: 15px;
            }
            .hospitality-item {
                border-radius: 10px;
                padding: 20px;
                font-size: 16px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
                filter: blur(10);
                -webkit-filter: blur(10);
            }
            .hospitality-item:hover {
                transform: translateY(2px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            .hospitality-item h3 {
                font-size: 1.3rem;
                margin-bottom: 15px;
                color: #333;
                font-weight: 600;
                position: relative;
                padding-bottom: 8px;
            }
           .hospitality-item h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #9054d0, transparent);
    width: 100%;
}
            .hospitality-item ul {
                padding-left: 0;
                list-style-type: none;
            }
            .hospitality-item li {
                font-size: 1rem;
                margin-bottom: 0.5rem;
                position: relative;
                padding-left: 1.5em;
            }
            .hospitality-item li::before {
                content: "•";
                color: #9054d0;
                position: absolute;
                left: 0;
                top: 0;
            }
            .title { grid-area: title; text-align: center; }
            .description { 
                grid-area: description; 
                text-align: center; 
                max-width: 70%;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            .button-wrapper { 
                grid-area: button; 
                text-align: center;
                margin-top: 10px;
                margin-bottom: 20px;
            }
            .properties { 
                grid-area: properties; 
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }
            @media (max-width: 768px) {
                .hospitality-grid {
                    padding: 10px;
                }
                .description {
                    max-width: 100%;
                }
                .properties {
                    grid-template-columns: 1fr;
                }
                .hospitality-item {
                    padding: 15px;
                }
                .hospitality-item h3 {
                    font-size: 1.1rem;
                }
            }
        </style>
        <div class="hospitality-grid">
            <h2 class="card-title fw-bold mb-3 title">Hospitality Solutions</h2>
            <p class="card-text mb-3 description">Comprehensive solutions for managing multi-brand properties, enhancing guest experiences, and optimizing hotel operations with seamless integration and automation.</p>
            <div class="button-wrapper">
                <a href="#" class="business-btn btn-sm">Learn More</a>
            </div>
            <div class="properties">
                <div class="hospitality-item business-clarity">
                    <h3><i class="fas fa-chart-line" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Business Clarity & Synergy</h3>
                    <ul>
                        <li>Control and monitoring of multi-brand properties</li>
                        <li>Synergy across hospitality portfolio</li>
                        <li>Unified management platform</li>
                    </ul>
                </div>
                <div class="hospitality-item service-excellence">
                    <h3><i class="fas fa-star" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Service Excellence & Revenue</h3>
                    <ul>
                        <li>Pre-arrival to post-departure engagement</li>
                        <li>Enhanced service quality</li>
                        <li>Repeat business encouragement</li>
                    </ul>
                </div>
                <div class="hospitality-item one-stop-service">
                    <h3><i class="fas fa-concierge-bell" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> One Stop Service</h3>
                    <ul>
                        <li>End-to-end ICT solutions</li>
                        <li>Tailored for hospitality industry</li>
                        <li>Integrated service offerings</li>
                    </ul>
                </div>
                <div class="hospitality-item invoicing-system">
                    <h3><i class="fas fa-file-invoice-dollar" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Seamless Invoicing System</h3>
                    <ul>
                        <li>Unique fee schemes</li>
                        <li>Performance-based billing</li>
                        <li>Multi-hotel simultaneous invoicing</li>
                    </ul>
                </div>
                <div class="hospitality-item cost-effectiveness">
                    <h3><i class="fas fa-piggy-bank" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Cost Price Effectiveness</h3>
                    <ul>
                        <li>Collective purchasing support</li>
                        <li>iLogistic module integration</li>
                        <li>Price efficiency achievement</li>
                    </ul>
                </div>
                <div class="hospitality-item management-system">
                    <h3><i class="fas fa-tasks" style="background: linear-gradient(to bottom, #9054d0, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Comprehensive Management</h3>
                    <ul>
                        <li>Integrated software for mixed-use properties</li>
                        <li>Hotel and resort management</li>
                        <li>Golf course operations</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
  manufacturing: `
    <style>
        .manufacturing-grid {
            display: grid;
            grid-template-areas: 
                "title"
                "description"
                "button"
                "solutions";
            gap: 15px;
            padding: 20px;
            border-radius: 15px;
        }
        .manufacturing-item {
            border-radius: 10px;
            padding: 20px;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .manufacturing-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .manufacturing-item h3 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #333;
            font-weight: 600;
            position: relative;
            padding-bottom: 10px;
        }
        .manufacturing-item h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(to right, transparent, #0000FF, transparent);
            width: 100%;
        }
        .manufacturing-item ul {
            list-style-type: none;
            padding-left: 0;
        }
        .manufacturing-item li {
            margin-bottom: 8px;
            font-size: 1rem;
            line-height: 1.4;
            position: relative;
            padding-left: 20px;
        }
        .manufacturing-item li::before {
            content: "•";
            color: #0000FF;
            position: absolute;
            left: 0;
            top: 0;
        }
        .title { grid-area: title; text-align: center; }
        .description { 
            grid-area: description; 
            text-align: center; 
            max-width: 70%;
            margin: 0 auto;
            margin-bottom: 15px;
        }
      
        .button-wrapper { 
            grid-area: button; 
            text-align: center;
            margin-top: 10px;
            margin-bottom: 20px;
        }

        .solutions { 
            grid-area: solutions; 
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
      /* Mobile Styles */
    @media (max-width: 768px) {
        .manufacturing-grid {
            padding: 10px;
        }
        .description {
            max-width: 100%;
        }
        .solutions {
            grid-template-columns: 1fr;
        }
        .manufacturing-item {
            padding: 15px;
        }
        .manufacturing-item h3 {
            font-size: 1.1rem;
        }
        .manufacturing-item li {
            font-size: 0.9rem;
        }
    }
    </style>
    <div class="manufacturing-grid">
        <h2 class="card-title fw-bold mb-3 title">Manufacturing Excellence</h2>
        <p class="card-text mb-3 description">Comprehensive solutions to optimize production, streamline supply chains, and ensure quality control across all manufacturing processes. Our integrated platform offers advanced tools for every aspect of manufacturing.</p>
        <div class="button-wrapper">
            <a href="#" class="business-btn btn-sm">Learn More</a>
        </div>
        <div class="solutions">
            <div class="manufacturing-item production">
                <h3><i class="fas fa-industry" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Production Optimization</h3>
                <ul>
                    <li>Advanced scheduling algorithms</li>
                    <li>Real-time production monitoring</li>
                    <li>Predictive maintenance</li>
                </ul>
            </div>
            <div class="manufacturing-item supply-chain">
                <h3><i class="fas fa-link" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Supply Chain Management</h3>
                <ul>
                    <li>End-to-end visibility</li>
                    <li>Demand forecasting</li>
                    <li>Inventory optimization</li>
                </ul>
            </div>
            <div class="manufacturing-item quality-control">
                <h3><i class="fas fa-check-circle" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Quality Control Systems</h3>
                <ul>
                    <li>Automated inspection processes</li>
                    <li>Statistical process control</li>
                    <li>Defect tracking and analysis</li>
                </ul>
            </div>
            <div class="manufacturing-item analytics">
                <h3><i class="fas fa-chart-line" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Process Analytics</h3>
                <ul>
                    <li>Real-time performance dashboards</li>
                    <li>Predictive analytics</li>
                    <li>Machine learning integration</li>
                </ul>
            </div>
            <div class="manufacturing-item lean">
                <h3><i class="fas fa-compress-arrows-alt" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Lean Manufacturing</h3>
                <ul>
                    <li>Value stream mapping</li>
                    <li>Continuous improvement tools</li>
                    <li>Waste reduction strategies</li>
                </ul>
            </div>
            <div class="manufacturing-item automation">
                <h3><i class="fas fa-robot" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Factory Automation</h3>
                <ul>
                    <li>Robotics integration</li>
                    <li>IoT device management</li>
                    <li>Automated material handling</li>
                </ul>
            </div>
            <div class="manufacturing-item compliance">
                <h3><i class="fas fa-clipboard-check" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Regulatory Compliance</h3>
                <ul>
                    <li>Automated documentation</li>
                    <li>Compliance tracking</li>
                    <li>Audit trail management</li>
                </ul>
            </div>
            <div class="manufacturing-item sustainability">
                <h3><i class="fas fa-leaf" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Sustainability Initiatives</h3>
                <ul>
                    <li>Energy consumption monitoring</li>
                    <li>Waste reduction tracking</li>
                    <li>Carbon footprint analysis</li>
                </ul>
            </div>
            <div class="manufacturing-item workforce">
                <h3><i class="fas fa-users" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Workforce Management</h3>
                <ul>
                    <li>Skill-based scheduling</li>
                    <li>Training and certification tracking</li>
                    <li>Performance analytics</li>
                </ul>
            </div>
            <div class="manufacturing-item customization">
                <h3><i class="fas fa-cogs" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Product Customization</h3>
                <ul>
                    <li>Configure-to-order systems</li>
                    <li>Mass customization tools</li>
                    <li>Product configurators</li>
                </ul>
            </div>
            <div class="manufacturing-item traceability">
                <h3><i class="fas fa-search-location" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Product Traceability</h3>
                <ul>
                    <li>Serialization and tracking</li>
                    <li>Blockchain integration</li>
                    <li>Recall management</li>
                </ul>
            </div>
            <div class="manufacturing-item integration">
                <h3><i class="fas fa-network-wired" style="background: linear-gradient(to right, #000080, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i> Systems Integration</h3>
                <ul>
                    <li>ERP integration</li>
                    <li>MES and SCADA connectivity</li>
                    <li>API-driven architecture</li>
                </ul>
            </div>
        </div>
    </div>
`,
  // Add more content for other tabs here
  property: `
        <style>
            .property-grid {
                display: grid;
                grid-template-areas: 
                    "title"
                    "description"
                    "button"
                    "properties"
                    "features";
                gap: 15px;
                padding: 20px;
                border-radius: 15px;
            }
            .property-item {
                border-radius: 10px;
                padding: 20px;
                font-size: 16px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
                filter: blur(10);
                -webkit-filter: blur(10);
            }
            .property-item:hover {
                transform: translateY(2px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            .property-item h3 {
                font-size: 1.3rem;
                margin-bottom: 15px;
                color: #333;
                font-weight: 600;
                position: relative;
                padding-bottom: 8px;
            }
            .property-item h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(to right, transparent, #00008B, transparent);
                width: 100%;
            }
            .property-item ul {
                list-style-type: none;
                padding-left: 0;
            }
            .property-item li {
                margin-bottom: 8px;
                font-size: 1rem;
                line-height: 1.4;
                position: relative;
                padding-left: 20px;
            }
            .property-item li::before {
                content: "•";
                color: #9054d0;
                position: absolute;
                left: 0;
                top: 0;
            }
            .title { grid-area: title; text-align: center; }
            .description { 
                grid-area: description; 
                text-align: center; 
                max-width: 70%;
                margin: 0 auto;
            }
            .button-wrapper { 
                grid-area: button; 
                text-align: center;
                margin-top: -10px;
            }
            .properties { 
                grid-area: properties; 
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 20px;
            }
            .features { 
                grid-area: features; 
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
            }
/* Mobile Styles */
    @media (max-width: 768px) {
        .property-grid {
            padding: 10px;
        }
        .description {
            max-width: 100%;
            font-size: 1rem !important;
        }
        .properties, .features {
            grid-template-columns: 1fr;
        }
        .property-item {
            padding: 15px;
        }
        .property-item h3 {
            font-size: 1.2rem;
        }
        .property-item li {
            font-size: 0.9rem;
        }
        .title {
            font-size: 1.5rem;
        }
        .button-wrapper {
            margin-top: 10px;
        }
        svg {
            width: 40px;
            height: 40px;
        }
    }

        </style>
        <div class="property-grid">
            <h2 class="card-title fw-bold mb-3 title">Property & High-Rise Building Solutions</h2>
            <p class="card-text mb-3 description">Integrated solutions for efficient management of property portfolios, tenant services, and building operations with real-time monitoring and control.</p>
            <div class="button-wrapper">
                <a href="#" class="business-btn btn-sm">Learn More</a>
            </div>
            <div class="properties">
                <div class="property-item commercial">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 40V10C10 7.79086 11.7909 6 14 6H36C38.2091 6 40 7.79086 40 10V40C40 42.2091 38.2091 44 36 44H14C11.7909 44 10 42.2091 10 40Z" stroke="url(#paint0_linear)" stroke-width="2"/>
                        <path d="M18 16H32M18 24H32M18 32H32" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="25" y1="6" x2="25" y2="44" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="25" y1="16" x2="25" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>Commercial Properties</h3>
                    <ul>
                        <li>Shopping Center</li>
                        <li>Office</li>
                        <li>Industrial Estate</li>
                        <li>Warehouse</li>
                        <li>Datacenter</li>
                    </ul>
                </div>
                <div class="property-item residential">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 10L40 25V40H10V25L25 10Z" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 40V30H30V40" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="25" y1="10" x2="25" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="25" y1="30" x2="25" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>Residential</h3>
                    <ul>
                        <li>Apartment</li>
                        <li>Landed House</li>
                    </ul>
                </div>
                <div class="property-item mixed-use">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="30" height="30" rx="2" stroke="url(#paint0_linear)" stroke-width="2"/>
                        <path d="M10 20H40M20 10V40M30 10V40" stroke="url(#paint1_linear)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="25" y1="10" x2="25" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="25" y1="10" x2="25" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00008B"/>
                                <stop offset="1" stop-color="#00008B" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>Mixed-use Property</h3>
                    <ul>
                        <li>Shopping Center</li>
                        <li>Hotel</li>
                        <li>Apartment</li>
                        <li>Office</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
  finance: `
    <style>
        .finance-grid {
            display: grid;
            grid-template-areas: 
                "title"
                "description"
                "button"
                "solutions"
                "features";
            gap: 15px;
            padding: 20px;
            border-radius: 15px;
        }
        .finance-item {
            border-radius: 10px;
            padding: 20px;
            font-size: 16px;
            transition: all 0.3s ease;
                box-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
                filter: blur(10);
                -webkit-filter: blur(10);
        }
        .finance-item:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .finance-item h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            font-weight: 600;
            position: relative;
            padding-bottom: 8px;
        }
        .finance-item h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(to right, transparent, #FF0000, transparent);
            width: 100%;
        }
        .finance-item ul {
            list-style-type: none;
            padding-left: 0;
        }
        .finance-item li {
            margin-bottom: 8px;
            font-size: 1rem;
            line-height: 1.4;
            position: relative;
            padding-left: 20px;
        }
        .finance-item li::before {
            content: "•";
            color: #4CAF50;
            position: absolute;
            left: 0;
            top: 0;
        }
        .title { grid-area: title; text-align: center; }
        .description { 
             grid-area: description; 
        text-align: center; 
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 15px;
        }
        .button-wrapper { 
               grid-area: button; 
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
        }
        .solutions { 
            grid-area: solutions; 
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }
        .features { 
            grid-area: features; 
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 66.67%;
            margin: 20px auto 0;
        }
             /* Mobile Styles */
    @media (max-width: 768px) {
        .finance-grid {
            padding: 10px;
        }
        .description {
            max-width: 100%;
            font-size: 1rem !important;
        }
        .solutions, .features {
            grid-template-columns: 1fr;
        }
        .finance-item {
            padding: 15px;
        }
        .finance-item h3 {
            font-size: 1.2rem;
        }
        .finance-item li {
            font-size: 0.9rem;
        }
        .title {
            font-size: 1.5rem;
        }
        .button-wrapper {
            margin-top: 10px;
        }
        .features {
            max-width: 100%;
            margin: 20px 0 0;
        }
        svg {
            width: 40px;
            height: 40px;
        }
    }
</style>
        <h2 class="card-title fw-bold mb-3 title">Financial Services Solutions</h2>
        <p class="card-text mb-3 description">Tailored solutions for enhancing security, compliance, and operational efficiency in banking, insurance, and financial services. Our comprehensive approach addresses the unique challenges faced by the financial sector.</p>
        <div class="button-wrapper">
            <a href="#" class="business-btn btn-sm">Learn More</a>
        </div>
        <div class="solutions">
            <div class="finance-item banking">
                <div class="icon-title-wrapper">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 5L5 15L25 25L45 15L25 5Z" fill="url(#paint0_linear_security)"/>
                        <path d="M5 35L25 45L45 35M5 25L25 35L45 25" stroke="url(#paint1_linear_security)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_security" x1="5" y1="15" x2="45" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_security" x1="5" y1="25" x2="45" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>IT SECURITY</h3>
                </div>
                <ul>
                    <li>Tackle the complex cyber threats management</li>
                    <li>Protect all data assets, devices, network and</li>
                    <li>applications from cyber threats</li>
                    <li>Prevent data breaches</li>
                    <li>Prevent ransomware</li>
                </ul>
            </div>
            <div class="finance-item compliance">
                <div class="icon-title-wrapper">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 25C10 16.7157 16.7157 10 25 10C33.2843 10 40 16.7157 40 25C40 33.2843 33.2843 40 25 40" stroke="url(#paint0_linear_service)" stroke-width="2"/>
                        <path d="M25 20V30M20 25H30" stroke="url(#paint1_linear_service)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_service" x1="10" y1="25" x2="40" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_service" x1="20" y1="25" x2="30" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>IT SERVICE MANAGEMENT</h3>
                </div>
                <ul>
                    <li>Resolve your organization's support IT</li>
                    <li>incidents, help your users report</li>
                    <li>Manage IT assets</li>
                    <li>Automate IT processes</li>
                    <li>Improve IT service delivery</li>
                </ul>
            </div>
            <div class="finance-item operations">
                <div class="icon-title-wrapper">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="30" height="30" rx="2" stroke="url(#paint0_linear_asset)" stroke-width="2"/>
                        <path d="M17 25H33M25 17V33" stroke="url(#paint1_linear_asset)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_asset" x1="10" y1="25" x2="40" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_asset" x1="17" y1="25" x2="33" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>IT ASSET MANAGEMENT</h3>
                </div>
                <ul>
                    <li>Optimize IT and software asset, plan, deploy</li>
                    <li>and manage software licenses</li>
                    <li>Reduce IT costs</li>
                    <li>Improve IT efficiency</li>
                    <li>Enhance decision-making</li>
                </ul>
            </div>
        </div>
        <div class="features">
            <div class="finance-item operations">
                <div class="icon-title-wrapper">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="20" stroke="url(#paint0_linear_endpoint)" stroke-width="2"/>
                        <path d="M25 15V35M15 25H35" stroke="url(#paint1_linear_endpoint)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_endpoint" x1="5" y1="25" x2="45" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_endpoint" x1="15" y1="25" x2="35" y2="25" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000"/>
                                <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>UNIFIED ENDPOINT MANAGEMENT</h3>
                </div>
                <ul>
                    <li>Centrally manage, monitor, and secure to each endpoint across your organization</li>
                    <li>Manage mobile devices, laptops, desktops, servers, and IoT devices</li>
                    <li>Windows 11 Manage every endpoint</li>
                </ul>
            </div>
        </div>
    </div>
`,
  hr: `<div class="card-body"><h2>Human Resource Solutions</h2><p>Content for Human Resource...</p></div>`,
  industry: `<div class="card-body"><h2>Industry Solutions</h2><p>Content for Industry...</p></div>`,
  hotel: `<div class="card-body"><h2>Hotel Solutions</h2><p>Content for Hotel...</p></div>`,
};

function toggleCard(element, contentKey) {
  const contentCards = document.getElementById("contentCards");
  const tags = document.getElementsByClassName("tag-item");

  // Remove 'active' class from all tags
  for (let tag of tags) {
    tag.classList.remove("active");
  }

  // Add 'active' class to clicked tag
  element.classList.add("active");

  // Show appropriate content based on clicked tag
  contentCards.innerHTML = `
        <div class="card content-card mt-5">
            ${cardContents[contentKey]}
        </div>
    `;

  // Apply dark mode styles to the new content if dark mode is active
  if (document.body.classList.contains("dark-mode")) {
    applyDarkModeToIndustryContent();
  }
}

// Initialize with the first tab (Hospitality)
document.addEventListener("DOMContentLoaded", (event) => {
  const firstTab = document.querySelector(".tag-item");
  toggleCard(firstTab, "hospitality");
});

// MARQUEE SECTION
function toggleCard(element, contentKey) {
  const contentCards = document.getElementById("contentCards");
  const tags = document.getElementsByClassName("tag-item");

  // Remove 'active' class from all tags
  for (let tag of tags) {
    tag.classList.remove("active");
  }

  // Add 'active' class to clicked tag
  element.classList.add("active");

  // Show appropriate content based on clicked tag
  contentCards.innerHTML = `
        <div class="card content-card mt-5">
            ${cardContents[contentKey]}
        </div>
    `;
}

// Initialize with the first tab (Hospitality)
document.addEventListener("DOMContentLoaded", (event) => {
  const firstTab = document.querySelector(".tag-item");
  toggleCard(firstTab, "hospitality");
});

// STATIC LOGO DISPLAY
document.addEventListener("DOMContentLoaded", function () {
  const partners = {
    cloud: [
      "assets/img/logos/azure.png",
      "assets/img/logos/biz.png",
      "assets/img/logos/google.png",
      "assets/img/logos/hp.png",
    ],
    tech: [
      "assets/img/logos/aruba.png",
      "assets/img/logos/comms.png",
      "assets/img/logos/enterprise.png",
      "assets/img/logos/micro.png",
      "assets/img/logos/oracle.png",
    ],
  };

  function setupStaticLogos(containerId, logos) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear existing content

    logos.forEach((logo) => {
      const item = document.createElement("div");
      item.className = "logo-item";
      const img = document.createElement("img");
      img.src = logo;
      img.alt = "Partner Logo";
      item.appendChild(img);
      container.appendChild(item);
    });
  }

  setupStaticLogos("cloudPartnersContainer", partners.cloud);
  setupStaticLogos("technologyPartnersContainer", partners.tech);
});

////NAV
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const fullScreenSidebar = document.querySelector(".full-screen-sidebar");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleSidebar() {
    navToggle.classList.toggle("open");
    fullScreenSidebar.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  }

  navToggle.addEventListener("click", toggleSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
      if (window.innerWidth < 992) {
        toggleSidebar();
      }
      // Add smooth scrolling to target section here
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Navbar shrink on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 1rem";
      navbar.querySelector(".navbar-brand img").style.maxWidth = "50%";
    } else {
      navbar.style.padding = "1rem";
      navbar.querySelector(".navbar-brand img").style.maxWidth = "100%";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".tags-wrapper");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "none";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    e.preventDefault(); // Prevent default behavior
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Existing toggleCard function and other JavaScript...
});

// DARK MODE
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggleNav = document.getElementById("darkModeToggleNav");
  const darkModeToggleSidebar = document.getElementById(
    "darkModeToggleSidebar"
  );
  const body = document.body;

  // Function to toggle dark mode
  function toggleDarkMode() {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    updateDarkModeIcons(isDarkMode);
  }

  // Function to update icons
  function updateDarkModeIcons(isDarkMode) {
    const icons = document.querySelectorAll(
      "#darkModeToggleNav i, #darkModeToggleSidebar i"
    );
    icons.forEach((icon) => {
      if (isDarkMode) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    });
  }

  // Initialize dark mode
  function initDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    if (isDarkMode) {
      body.classList.add("dark-mode");
    }
    updateDarkModeIcons(isDarkMode);
  }

  // Add event listeners
  darkModeToggleNav.addEventListener("click", toggleDarkMode);
  darkModeToggleSidebar.addEventListener("click", toggleDarkMode);

  // Initialize
  initDarkMode();

  // Handle mobile menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const fullScreenSidebar = document.querySelector(".full-screen-sidebar");

  navToggle.addEventListener("click", function () {
    this.classList.toggle("open");
    fullScreenSidebar.classList.toggle("open");
  });
});

// SIDEBAR
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const fullScreenSidebar = document.querySelector(".full-screen-sidebar");

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("open");
    fullScreenSidebar.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", function () {
      this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseout", function () {
      this.querySelector(".dropdown-menu").style.display = "none";
    });
  });
});

// TESTIMONIAL

// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialCarousel = document.querySelector('.testimonial-carousel');
//     const indicatorsContainer = document.querySelector('.indicators');
//     let currentIndex = 0;
//     let intervalId;

//     // Testimonial data
//     const testimonials = [
//         {
//             name: "Raymond Galario",
//             location: "Sydney, Australia",
//             image: "assets/img/team/avatar4.jpg",
//             quote: "Exceptional service! The team went above and beyond to meet our needs. Highly recommended for anyone looking for quality and professionalism.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         },
//         {
//             name: "Jane Doe",
//             location: "New York, USA",
//             image: "assets/img/team/avatar5.jpg",
//             quote: "I'm thoroughly impressed with the level of expertise and dedication. The solutions provided have significantly improved our business operations.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         },
//         {
//             name: "John Smith",
//             location: "London, UK",
//             image: "assets/img/team/avatar2.jpg",
//             quote: "Working with this team has been a game-changer for our company. Their innovative approach and attention to detail are unmatched.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         }
//     ];

//     // Create testimonial elements
//     // Create testimonial elements
//     testimonials.forEach((testimonial, index) => {
//         const testimonialElement = document.createElement('div');
//         testimonialElement.classList.add('testimonial');
//         if (index === 0) testimonialElement.classList.add('active');

//         testimonialElement.innerHTML = `
//             <img src="${testimonial.image}" alt="${testimonial.name}" class="client-image">
//             <h3>${testimonial.name}</h3>
//             <p class="location">${testimonial.location}</p>
//             <blockquote class="testimonial-quote">
//                 <span class="quote-mark">&ldquo;</span>
//                 ${testimonial.quote}
//                 <span class="quote-mark">&rdquo;</span>
//             </blockquote>
//             <p class="video-link">
//                 <a href="#" class="open-video" data-video-url="${testimonial.videoUrl}">
//                     <i class="fas fa-play-circle"></i> Watch Video Testimonial
//                 </a>
//             </p>
//         `;
//         testimonialCarousel.appendChild(testimonialElement);

//         // Create indicator
//         const indicator = document.createElement('div');
//         indicator.classList.add('indicator');
//         if (index === 0) indicator.classList.add('active');
//         indicator.addEventListener('click', () => goToSlide(index));
//         indicatorsContainer.appendChild(indicator);
//     });

//     const testimonialElements = document.querySelectorAll('.testimonial');
//     const indicators = document.querySelectorAll('.indicator');

//     function goToSlide(index) {
//         testimonialElements[currentIndex].classList.remove('active');
//         indicators[currentIndex].classList.remove('active');
//         currentIndex = index;
//         testimonialElements[currentIndex].classList.add('active');
//         indicators[currentIndex].classList.add('active');

//         // Animate indicator width
//         indicators.forEach((indicator, idx) => {
//             if (idx === currentIndex) {
//                 indicator.style.width = '50px';
//             } else {
//                 indicator.style.width = '30px';
//             }
//         });
//     }

//     function nextSlide() {
//         let nextIndex = (currentIndex + 1) % testimonialElements.length;
//         goToSlide(nextIndex);
//     }

//     function startAutoSlide() {
//         intervalId = setInterval(nextSlide, 10000); // 10 seconds
//     }

//     function stopAutoSlide() {
//         clearInterval(intervalId);
//     }

//     // Initialize
//     startAutoSlide();

//     // Pause auto-slide on hover
//     testimonialCarousel.addEventListener('mouseenter', stopAutoSlide);
//     testimonialCarousel.addEventListener('mouseleave', startAutoSlide);

//     // Video popup functionality
//     document.addEventListener('click', function(e) {
//         if (e.target && e.target.closest('.open-video')) {
//             e.preventDefault();
//             const videoUrl = e.target.closest('.open-video').getAttribute('data-video-url');
//             openVideoPopup(videoUrl);
//         }
//     });

//     function openVideoPopup(videoUrl) {
//         const popup = document.createElement('div');
//         popup.className = 'video-popup';
//         popup.innerHTML = `
//             <div class="video-popup-content">
//                 <button class="close-popup">&times;</button>
//                 <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
//             </div>
//         `;
//         document.body.appendChild(popup);

//         popup.querySelector('.close-popup').addEventListener('click', () => {
//             document.body.removeChild(popup);
//         });

//         popup.addEventListener('click', (e) => {
//             if (e.target === popup) {
//                 document.body.removeChild(popup);
//             }
//         });
//     }
// });

// FLOATING ORBS
document.addEventListener("DOMContentLoaded", function () {
  const orbsContainer = document.querySelector(".floating-orbs");
  const orbColors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff"];
  const numOrbs = 5;

  for (let i = 0; i < numOrbs; i++) {
    const orb = document.createElement("div");
    orb.classList.add("orb");

    // Increased size range from 20-80px to 40-100px
    const size = Math.random() * 60 + 40; // Random size between 40px and 100px
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;

    // ... rest of the code remains the same ...
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;

    orb.style.backgroundColor =
      orbColors[Math.floor(Math.random() * orbColors.length)];

    orb.style.animationDelay = `${Math.random() * 2}s`;
    orb.style.animationDuration = `${15 + Math.random() * 5}s`;

    orbsContainer.appendChild(orb);
  }
});

// TEXT SCRAMBLE
// Number animation function
function scrambleText(element, finalValue) {
  let current = 0;
  const chars = "0123456789";
  const duration = 1000; // Animation duration in milliseconds
  const fps = 60; // Frames per second
  const increment = finalValue / ((duration / 1000) * fps);

  const animate = () => {
    current = Math.min(current + increment, finalValue);
    const displayValue = Math.floor(current);

    element.innerText = displayValue
      .toString()
      .split("")
      .map((char, index) => {
        if (index < displayValue.toString().length - 1) {
          return finalValue.toString()[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (current < finalValue) {
      requestAnimationFrame(animate);
    } else {
      element.innerText = finalValue + "+";
    }
  };

  animate();
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Initial check on page load
document.addEventListener("DOMContentLoaded", handleScroll);

// Check on scroll
window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play-testimonial-video");
  const videoOverlay = document.getElementById("video-overlay");
  const closeButton = document.getElementById("close-video");
  const video = document.getElementById("popup-video");

  playButton.addEventListener("click", function () {
    videoOverlay.style.display = "flex";
    video.play();
  });

  closeButton.addEventListener("click", function () {
    videoOverlay.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });

  videoOverlay.addEventListener("click", function (e) {
    if (e.target === videoOverlay) {
      videoOverlay.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
});
