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

        @media (max-width: 768px) {
    .hospitality-grid,
    .manufacturing-grid,
    .property-grid,
    .finance-grid {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .description {
        max-width: 100%;
        text-align: center;
    }

    .title {
        width: 100%;
        text-align: center;
        padding-left: 15px;
    }

    .properties, 
    .solutions,
    .features {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 0 15px;
    }

    .hospitality-item,
    .manufacturing-item,
    .property-item,
    .finance-item {
        padding: 15px;
        width: 100%;
    }

    .card-text {
        text-align: center;
    }

    .button-wrapper {
        font-size: 0.9rem;
        padding: 8px 15px;
        margin: 5px auto;
        max-width: 200px;
        transform: scale(0.95);
    }

    .button-wrapper a {
        padding: 8px 20px;
        min-height: 36px;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 180px;
        border-radius: 20px;
    }

    .button-wrapper.fade-in {
        transform: scale(0.95);
        transition: transform 0.3s ease;
    }
    /* Remove font size modifications */
    .card-title,
    .card-text,
    .card-body ul,
    .hospitality-item h3,
    .manufacturing-item h3,
    .property-item h3,
    .finance-item h3,
    .hospitality-item li,
    .manufacturing-item li,
    .property-item li,
    .finance-item li {
        font-size: inherit;
    }

    .button-wrapper {
        font-size: 0.9rem;
    }
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
            font-size: 15px;
        }
        .card-body li {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .card-title {
                font-size: 15px;
            }
            .card-text, .card-body ul {
                font-size: 14px;
            }
        }

        /* Base tag styling */
        .tag-item {
            position: relative !important;
            // padding: 8px 18px !important; /* Reduced padding */
            margin: 0 6px !important; /* Tighter margins */
            border: 1.5px solid rgba(var(--brand-color-rgb), 0.3) !important;
            cursor: pointer !important;
            font-family: var(--font-family-base) !important;
            font-size: 18px !important; /* Slightly smaller */
            font-weight: 500 !important;
            border-radius: 25px !important;
            color: var(--text-color-primary) !important;
            background: linear-gradient(145deg, var(--bg-color), rgba(var(--brand-color-rgb), 0.02)) !important;
            transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            transform: translateY(-4px) !important;
            backface-visibility: hidden !important;
            will-change: transform, box-shadow, border-color !important;
            user-select: none !important;
            -webkit-tap-highlight-color: transparent !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-decoration: none !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            letter-spacing: 0.2px !important;
        }

        /* Hover effect */
        .tag-item:hover {
            transform: translateY(-3px) !important;
        
        }

        /* Active state */
        .tag-item.active {
            font-weight: var(--font-weight-semibold) !important;
            transform: translateY(6px) !important;
       
            border-color: rgba(var(--brand-color-rgb), 0.8) !important;
            color: rgba(var(--brand-color-rgb), 0.9) !important;
            transition: none !important;
        }

        /* Active underline animation */
    
        /* Click state */
        .tag-item:active {
            transform: translateY(1px) !important;
            border-color: rgba(var(--brand-color-rgb), 0.4) !important;
        }

        /* Dark mode styles */
        body.dark-mode .tag-item {
            background: var(--bg-dark) !important;
            color: var(--text-color-dark) !important;
        }

        body.dark-mode .tag-item:hover {
            background: var(--bg-dark-hover) !important;
        }

        body.dark-mode .tag-item.active {
            background: var(--bg-dark-active) !important;
            color: rgba(var(--brand-color-rgb), 0.9) !important;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
            .tag-item {
                padding: 6px 16px !important;
                font-size: 0.9rem !important;
                min-height: 32px !important;
            }

            .tag-item:hover {
                transform: translateY(-2px) !important;
            }

            .tag-item.active {
                transform: translateY(1px) !important;
            }
        }

        /* Enhanced Tag Styling */
        .tag-item::before {
            content: '' !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 0 !important;
            height: 0 !important;
            background: radial-gradient(circle, rgba(var(--brand-color-rgb), 0.1) 0%, transparent 70%) !important;
            transform: translate(-50%, -50%) !important;
            transition: width 0.4s ease-out, height 0.4s ease-out !important;
            border-radius: 50% !important;
            z-index: -1 !important;
            pointer-events: none !important;
            opacity: 0 !important;
        }

        .tag-item:hover::before {
            width: 150px !important;
            height: 150px !important;
            opacity: 1 !important;
        }

        /* Ripple Effect Enhancement */
        .tag-item .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.8);
            transform: scale(0);
            animation: ripple 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(5);
                opacity: 0;
            }
        }

        /* Tags Wrapper Enhancement */
        .tags-wrapper {
            padding: 15px 0 !important;
            margin: 0 -8px !important;
            display: flex !important;
            gap: 12px !important;
            overflow-x: auto !important;
            scroll-behavior: smooth !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            perspective: 1000px !important;
            position: relative !important;
            z-index: 1 !important;
            /* Enhanced mobile scrolling */
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            flex-wrap: nowrap !important;
            -webkit-user-select: none !important;
            user-select: none !important;
            cursor: grab !important;
        }

        /* Improved mobile touch scrolling */
        @media (max-width: 768px) {
            .tags-wrapper {
                padding: 10px 15px !important;
                gap: 3px !important;
                scroll-padding: 0 15px !important;
                margin: 0 !important;
            }

            .tag-item {
                scroll-snap-align: center !important;
                flex: 0 0 auto !important;
                white-space: nowrap !important;
                padding: 8px 16px !important;
                font-size: 14px !important;
            }
        }

        .tags-wrapper::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        .tags-wrapper:active {
            cursor: grabbing !important;
        }

        /* Improved touch feedback */
        .tag-item:active {
            transform: scale(0.95) !important;
            transition: transform 0.2s ease !important;
        }

        /* Momentum scrolling for iOS */
        .tags-wrapper {
            -webkit-overflow-scrolling: touch !important;
            overflow-x: scroll !important;
            overflow-y: hidden !important;
            overscroll-behavior-x: contain !important;
        }

        /* Hide scrollbar for Firefox */
        .tags-wrapper {
            scrollbar-width: none !important;
        }

        /* Hide scrollbar for IE/Edge */
        .tags-wrapper {
            -ms-overflow-style: none !important;
        }
    `;
  document.head.appendChild(styleElement);
}

// Call this function when your page loads or when you're adding the content
injectStyles();

const cardContents = {
  hospitality: `
        <style>
            :root {
                --section-color: #9054d0;
            }
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
                filter: blur(10);
                -webkit-filter: blur(10);
            }
            .hospitality-item h3 {
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
                font-size: 18px;
                margin-bottom: 8px;
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
                opacity: 0;
                transform: translateY(20px);
                animation: fadeInUp 0.8s ease forwards;
            }
            @keyframes fadeInUp {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
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
             
            }
            .hospitality-item i {
                font-size: 1.8rem;
                margin-right: 0.5rem;
                color: #9054d0;
                transition: transform 0.3s ease;
            }
            .hospitality-item:hover i {
                /* transform: scale(1.1); */ /* Removed */
            }
            .icon-wrapper {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, rgba(144, 84, 208, 0.1), rgba(196, 144, 224, 0.1));
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                transition: all 0.3s ease;
            }
            .hospitality-item:hover .icon-wrapper {
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(144, 84, 208, 0.2);
            }
            .hospitality-btn {
                /* border: 2px solid #9054d0; */ /* REMOVED */
                color: #9054d0;
                background: transparent;
                padding: 12px 32px;
                border-radius: 25px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1.1rem;
                transition: all 0.3s ease;
            }
            .hospitality-btn:hover {
                background-color: rgba(144, 84, 208, 0.05);
                transform: translateY(-2px);
            }
            @media (max-width: 768px) {
                .hospitality-btn {
                    padding: 10px 24px;
                    font-size: 1rem;
                    min-height: 44px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 140px;
                }
            }
            .card-text {
                font-size: 1.1rem;
            }
            @media (max-width: 768px) {
             
                .hospitality-item li {
                    font-size: 16px;
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }
                .card-text {
                    font-size: 14px;
                }
            }
        </style>
        <div class="hospitality-grid">
            <h2 class="card-title fw-bold mb-3 title">Hospitality Solutions</h2>
            <p class="card-text mb-3 description">Comprehensive solutions for managing multi-brand properties, enhancing guest experiences, and optimizing hotel operations with seamless integration and automation.</p>
            <div class="button-wrapper">
                <a href="#" class="hospitality-btn btn-sm styled-button-convex">Learn More</a>
            </div>
            <div class="properties">
                <div class="hospitality-item business-clarity">
                    <h3><i class="fas fa-chart-bar"></i> Business Clarity & Synergy</h3>
                    <ul>
                        <li>Control and monitoring of multi-brand properties</li>
                        <li>Synergy across hospitality portfolio</li>
                        <li>Unified management platform</li>
                    </ul>
                </div>
                <div class="hospitality-item service-excellence">
                    <h3><i class="fas fa-crown"></i> Service Excellence & Revenue</h3>
                    <ul>
                        <li>Pre-arrival to post-departure engagement</li>
                        <li>Enhanced service quality</li>
                        <li>Repeat business encouragement</li>
                    </ul>
                </div>
                <div class="hospitality-item one-stop-service">
                    <h3><i class="fas fa-concierge-bell"></i> One Stop Service</h3>
                    <ul>
                        <li>End-to-end ICT solutions</li>
                        <li>Tailored for hospitality industry</li>
                        <li>Integrated service offerings</li>
                    </ul>
                </div>
                <div class="hospitality-item invoicing-system">
                    <h3><i class="fas fa-file-invoice-dollar"></i> Seamless Invoicing System</h3>
                    <ul>
                        <li>Unique fee schemes</li>
                        <li>Performance-based billing</li>
                        <li>Multi-hotel simultaneous invoicing</li>
                    </ul>
                </div>
                <div class="hospitality-item cost-effectiveness">
                    <h3><i class="fas fa-hand-holding-usd"></i> Cost Price Effectiveness</h3>
                    <ul>
                        <li>Collective purchasing support</li>
                        <li>iLogistic module integration</li>
                        <li>Price efficiency achievement</li>
                    </ul>
                </div>
                <div class="hospitality-item management-system">
                    <h3><i class="fas fa-tasks"></i> Comprehensive Management</h3>
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
        :root {
            --section-color: #0000FF;
        }
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
        }
        .manufacturing-item h3 {
            margin-bottom: 15px;
            color: #333;
            font-weight: 600;
            position: relative;
            padding-bottom: 8px;
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
            font-size: 18px;
            margin-bottom: 8px;
            line-height: 1.4;
            position: relative;
            padding-left: 1.5em;
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
     
        .manufacturing-item li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
    }
    .manufacturing-item i {
        font-size: 1.8rem;
        margin-right: 0.5rem;
        color: #0000FF;
        transition: transform 0.3s ease;
    }
    .manufacturing-item:hover i {
        /* transform: scale(1.1); */ /* Removed */
    }
    .icon-wrapper {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, rgba(0, 0, 255, 0.1), rgba(77, 77, 255, 0.1));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }
    .manufacturing-item:hover .icon-wrapper {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 255, 0.2);
    }
    .manufacturing-btn {
        /* border: 2px solid #0000FF; */ /* REMOVED */
        color: #0000FF;
        background: transparent;
        padding: 12px 32px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }
    .manufacturing-btn:hover {
        background-color: rgba(0, 0, 255, 0.05);
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        .manufacturing-btn {
            padding: 10px 24px;
            font-size: 1rem;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 140px;
        }
    }
    .card-text {
        font-size: 1.1rem;
    }
    @media (max-width: 768px) {
       
        .manufacturing-item li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
        .card-text {
            font-size: 14px;
        }
    }
    </style>
    <div class="manufacturing-grid">
        <h2 class="card-title fw-bold mb-3 title">Manufacturing Excellence</h2>
        <p class="card-text mb-3 description">Comprehensive solutions to optimize production, streamline supply chains, and ensure quality control across all manufacturing processes. Our integrated platform offers advanced tools for every aspect of manufacturing.</p>
        <div class="button-wrapper">
            <a href="#" class="manufacturing-btn btn-sm styled-button-convex">Learn More</a>
        </div>
        <div class="solutions">
            <div class="manufacturing-item production">
                <h3><i class="fas fa-industry"></i> Production Optimization</h3>
                <ul>
                    <li>Advanced scheduling algorithms</li>
                    <li>Real-time production monitoring</li>
                    <li>Predictive maintenance</li>
                </ul>
            </div>
            <div class="manufacturing-item supply-chain">
                <h3><i class="fas fa-link"></i> Supply Chain Management</h3>
                <ul>
                    <li>End-to-end visibility</li>
                    <li>Demand forecasting</li>
                    <li>Inventory optimization</li>
                </ul>
            </div>
            <div class="manufacturing-item quality-control">
                <h3><i class="fas fa-clipboard-check"></i> Quality Control Systems</h3>
                <ul>
                    <li>Automated inspection processes</li>
                    <li>Statistical process control</li>
                    <li>Defect tracking and analysis</li>
                </ul>
            </div>
            <div class="manufacturing-item analytics">
                <h3><i class="fas fa-chart-line"></i> Process Analytics</h3>
                <ul>
                    <li>Real-time performance dashboards</li>
                    <li>Predictive analytics</li>
                    <li>Machine learning integration</li>
                </ul>
            </div>
            <div class="manufacturing-item lean">
                <h3><i class="fas fa-compress-arrows-alt"></i> Lean Manufacturing</h3>
                <ul>
                    <li>Value stream mapping</li>
                    <li>Continuous improvement tools</li>
                    <li>Waste reduction strategies</li>
                </ul>
            </div>
            <div class="manufacturing-item automation">
                <h3><i class="fas fa-robot"></i> Factory Automation</h3>
                <ul>
                    <li>Robotics integration</li>
                    <li>IoT device management</li>
                    <li>Automated material handling</li>
                </ul>
            </div>
            <div class="manufacturing-item compliance">
                <h3><i class="fas fa-clipboard-check"></i> Regulatory Compliance</h3>
                <ul>
                    <li>Automated documentation</li>
                    <li>Compliance tracking</li>
                    <li>Audit trail management</li>
                </ul>
            </div>
            <div class="manufacturing-item sustainability">
                <h3><i class="fas fa-leaf"></i> Sustainability Initiatives</h3>
                <ul>
                    <li>Energy consumption monitoring</li>
                    <li>Waste reduction tracking</li>
                    <li>Carbon footprint analysis</li>
                </ul>
            </div>
            <div class="manufacturing-item workforce">
                <h3><i class="fas fa-users"></i> Workforce Management</h3>
                <ul>
                    <li>Skill-based scheduling</li>
                    <li>Training and certification tracking</li>
                    <li>Performance analytics</li>
                </ul>
            </div>
            <div class="manufacturing-item customization">
                <h3><i class="fas fa-cogs"></i> Product Customization</h3>
                <ul>
                    <li>Configure-to-order systems</li>
                    <li>Mass customization tools</li>
                    <li>Product configurators</li>
                </ul>
            </div>
            <div class="manufacturing-item traceability">
                <h3><i class="fas fa-search-location"></i> Product Traceability</h3>
                <ul>
                    <li>Serialization and tracking</li>
                    <li>Blockchain integration</li>
                    <li>Recall management</li>
                </ul>
            </div>
            <div class="manufacturing-item integration">
                <h3><i class="fas fa-network-wired"></i> Systems Integration</h3>
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
            :root {
                --section-color: #00008B;
            }
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
                filter: blur(10);
                -webkit-filter: blur(10);
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
                font-size: 18px;
                margin-bottom: 8px;
                line-height: 1.4;
                position: relative;
                padding-left: 1.5em;
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
                margin-bottom: 15px;
                opacity: 0;
                transform: translateY(20px);
                animation: fadeInUp 0.8s ease forwards;
            }
            @keyframes fadeInUp {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
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
     
        .property-item li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.5;
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
    .property-item i {
        font-size: 1.8rem;
        margin-right: 0.5rem;
        color: #00008B;
        transition: transform 0.3s ease;
    }
    .property-item:hover i {
        /* transform: scale(1.1); */ /* Removed */
    }
    .icon-wrapper {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, rgba(0, 0, 139, 0.1), rgba(0, 0, 205, 0.1));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }
    .property-item:hover .icon-wrapper {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 139, 0.2);
    }
    .property-btn {
        /* border: 2px solid #00008B; */ /* REMOVED */
        color: #00008B;
        background: transparent;
        padding: 12px 32px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }
    .property-btn:hover {
        background-color: rgba(0, 0, 139, 0.05);
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        .property-btn {
            padding: 10px 24px;
            font-size: 1rem;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 140px;
        }
    }
        </style>
        <div class="property-grid">
            <h2 class="card-title fw-bold mb-3 title">Property & High-Rise Building Solutions</h2>
            <p class="card-text mb-3 description">Integrated solutions for efficient management of property portfolios, tenant services, and building operations with real-time monitoring and control.</p>
            <div class="button-wrapper">
                <a href="#" class="property-btn btn-sm styled-button-convex">Learn More</a>
            </div>
            <div class="properties">
                <div class="property-item commercial">
                    <h3><i class="fas fa-building"></i> Commercial Properties</h3>
                    <ul>
                        <li>Shopping Center</li>
                        <li>Office</li>
                        <li>Industrial Estate</li>
                        <li>Warehouse</li>
                        <li>Data Center</li>
                    </ul>
                </div>
                <div class="property-item residential">
                    <h3><i class="fas fa-home"></i> Residential</h3>
                    <ul>
                        <li>Apartment</li>
                        <li>Landed House</li>
                    </ul>
                </div>
                <div class="property-item mixed-use">
                    <h3><i class="fas fa-city"></i> Mixed-use Property</h3>
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
        :root {
            --section-color: #FF0000;
        }
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
            filter: blur(10);
            -webkit-filter: blur(10);
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
            font-size: 18px;
            margin-bottom: 8px;
            line-height: 1.4;
            position: relative;
            padding-left: 1.5em;
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
    
        .finance-item li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.5;
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
    .finance-item i {
        font-size: 1.8rem;
        margin-right: 0.5rem;
        color: #FF0000;
        transition: transform 0.3s ease;
    }
    .finance-item:hover i {
        /* transform: scale(1.1); */ /* Removed */
    }
    .icon-wrapper {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 77, 77, 0.1));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }
    .finance-item:hover .icon-wrapper {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
    }
    .finance-btn {
        /* border: 2px solid #FF0000; */ /* REMOVED */
        color: #FF0000;
        background: transparent;
        padding: 12px 32px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }
    .finance-btn:hover {
        background-color: rgba(255, 0, 0, 0.05);
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        .finance-btn {
            padding: 10px 24px;
            font-size: 1rem;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 140px;
        }
    }
    .card-text {
        font-size: 1.1rem;
    }
    @media (max-width: 768px) {
        .finance-item h3 {
            font-size: 1.1rem;
        }
        .finance-item li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
        .card-text {
            font-size: 14px;
        }
    }
</style>
    <div class="finance-grid">

        <h2 class="card-title fw-bold mb-3 title">Financial Services Solutions</h2>
        <p class="card-text mb-3 description">Tailored solutions for enhancing security, compliance, and operational efficiency in banking, insurance, and financial services. Our comprehensive approach addresses the unique challenges faced by the financial sector.</p>
        <div class="button-wrapper">
            <a href="#" class="finance-btn btn-sm styled-button-convex">Learn More</a>
        </div>
        <div class="solutions">
            <div class="finance-item banking">
                <h3><i class="fas fa-shield-alt"></i> IT SECURITY</h3>
                <ul>
                    <li>Tackle the complex cyber threats management</li>
                    <li>Protect all data assets, devices, network and</li>
                    <li>applications from cyber threats</li>
                    <li>Prevent data breaches</li>
                    <li>Prevent ransomware</li>
                </ul>
            </div>
            <div class="finance-item compliance">
                <h3><i class="fas fa-cogs"></i> IT SERVICE MANAGEMENT</h3>
                <ul>
                    <li>Resolve your organization's support IT</li>
                    <li>incidents, help your users report</li>
                    <li>Manage IT assets</li>
                    <li>Automate IT processes</li>
                    <li>Improve IT service delivery</li>
                </ul>
            </div>
            <div class="finance-item operations">
                <h3><i class="fas fa-server"></i> IT ASSET MANAGEMENT</h3>
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
                <h3><i class="fas fa-network-wired"></i> UNIFIED ENDPOINT MANAGEMENT</h3>
                <ul>
                    <li>Centrally manage, monitor, and secure to each endpoint across your organization</li>
                    <li>Manage mobile devices, laptops, desktops, servers, and IoT devices</li>
                    <li>Windows 11 manage every endpoint</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
`,
  hr: `<div class="card-body"><h2>Human Resource Solutions</h2><p>Content for Human Resource...</p></div>`,
  industry: `<div class="card-body"><h2>Industry Solutions</h2><p>Content for Industry...</p></div>`,
  hotel: `<div class="card-body"><h2>Hotel Solutions</h2><p>Content for Hotel...</p></div>`,
};

// Content and Styles Configuration
const sectionStyles = {
    hospitality: {
        borderColor: '#9054d0',
        gradientColor: '#9054d0',
        buttonColor: '#9054d0'
    },
    manufacturing: {
        borderColor: '#0000FF',
        gradientColor: '#0000FF',
        buttonColor: '#0000FF'
    },
    property: {
        borderColor: '#00008B',
        gradientColor: '#00008B',
        buttonColor: '#00008B'
    },
    finance: {
        borderColor: '#FF0000',
        gradientColor: '#FF0000',
        buttonColor: '#FF0000'
    }
};

// Main Card Toggle Function
function toggleCard(element, contentKey) {
    try {
        if (!element || !contentKey) {
            console.error('Invalid parameters passed to toggleCard');
            return;
        }

        const contentCards = document.getElementById("contentCards");
        if (!contentCards) {
            console.error('Content cards container not found');
            return;
        }

        // Get section style
        const sectionStyle = sectionStyles[contentKey] || {
            borderColor: '#9054d0',
            gradientColor: '#9054d0',
            buttonColor: '#9054d0'
        };

        // Reset all tags to default state
        const tags = document.getElementsByClassName("tag-item");
        Array.from(tags).forEach(tag => {
            tag.classList.remove("active");
            tag.style.removeProperty('border-color');
            tag.style.removeProperty('color');
            tag.style.removeProperty('transform');
            tag.style.removeProperty('box-shadow');
        });
        
        // Apply active class and dynamic colors to tag
        element.classList.add("active");
        element.style.borderColor = sectionStyle.borderColor;
        element.style.color = sectionStyle.borderColor;

        // Create card content with dynamic colors
        contentCards.innerHTML = `
            <div class="card content-card mt-0" style="
                width: 99% !important;
                margin: 0 auto !important;
                border-radius: 25px 25px 25px 25px !important;
                border: 2px solid ${sectionStyle.borderColor} !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 6px ${sectionStyle.borderColor}1A !important;
                position: relative !important;
                z-index: 2 !important;
                background: #ffffff !important;
                pointer-events: none !important;
            ">
                <style>
                    .button-wrapper {
                        pointer-events: auto !important;
                    }
                    .button-wrapper a {
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        pointer-events: auto !important;
                    }
                    .button-wrapper.fade-in a {
                        opacity: 1;
                    }
                    .description {
                        grid-area: description;
                        text-align: center;
                        max-width: 70%;
                        margin: 0 auto;
                        margin-bottom: 15px;
                        opacity: 0;
                        transform: translateY(20px);
                        animation: fadeInUp 0.8s ease forwards;
                    }
                    @keyframes fadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .tag-item.active {
                        border-color: ${sectionStyle.borderColor} !important;
                        color: ${sectionStyle.borderColor} !important;
                        font-weight: var(--font-weight-semibold) !important;
                        transform: translateY(6px) !important;
                      
                    }
                    .tag-item.active::after {
                        background: ${sectionStyle.borderColor} !important;
                    }
                    h3::after {
                        background: linear-gradient(to right, transparent, ${sectionStyle.borderColor}, transparent) !important;
                    }
                    .${contentKey}-item li::before {
                        color: ${sectionStyle.borderColor} !important;
                    }
                    .${contentKey}-item i {
                        color: ${sectionStyle.borderColor} !important;
                    }
                    .${contentKey}-btn {
                        border-color: ${sectionStyle.borderColor} !important;
                        color: ${sectionStyle.borderColor} !important;
                    }
                    .${contentKey}-btn:hover {
                        background-color: ${sectionStyle.borderColor}0D !important;
                    }
                    .icon-wrapper {
                        background: linear-gradient(135deg, ${sectionStyle.borderColor}1A, ${sectionStyle.borderColor}1A) !important;
                    }
                    .icon-wrapper:hover {
                        box-shadow: 0 5px 15px ${sectionStyle.borderColor}33 !important;
                    }
                    body.dark-mode .content-card {
                        background: var(--bg-dark) !important;
                        border-color: ${sectionStyle.borderColor}40 !important;
                    }
                </style>
                ${cardContents[contentKey] || ''}
            </div>
        `;

        // Handle dark mode
        if (document.body.classList.contains("dark-mode")) {
            applyDarkModeToIndustryContent();
        }

        // Animate button
        setTimeout(() => {
            const buttonWrapper = contentCards.querySelector('.button-wrapper');
            if (buttonWrapper) {
                buttonWrapper.classList.add('fade-in');
            }
        }, 300);

    } catch (error) {
        console.error('Error in toggleCard:', error, error.stack);
    }
}

// Single Initialization Point
document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM Content Loaded - Initializing cards'); // Debug log
    
    try {
        // Initialize the first tab
        const firstTab = document.querySelector(".tag-item");
        if (firstTab) {
            const contentKey = firstTab.getAttribute('data-content') || 'hospitality';
            console.log('Initializing first tab with:', contentKey); // Debug log
            toggleCard(firstTab, contentKey);
        }

        // Add navigation arrows to the tags container
        const tagsWrapper = document.querySelector('.tags-container-wrapper');
        if (tagsWrapper) {
            // Create left arrow
            const leftArrow = document.createElement('div');
            leftArrow.className = 'scroll-indicator scroll-left';
            leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
            
            // Create right arrow
            const rightArrow = document.createElement('div');
            rightArrow.className = 'scroll-indicator scroll-right';
            rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
            
            // Add arrows to container
            tagsWrapper.appendChild(leftArrow);
            tagsWrapper.appendChild(rightArrow);

            // Get the tags wrapper for scrolling
            const tagsContainer = document.querySelector('.tags-wrapper');
            
            // Scroll left
            leftArrow.addEventListener('click', () => {
                tagsContainer.scrollBy({
                    left: -100,
                    behavior: 'smooth'
                });
            });
            
            // Scroll right
            rightArrow.addEventListener('click', () => {
                tagsContainer.scrollBy({
                    left: 100,
                    behavior: 'smooth'
                });
            });

            // Show/hide arrows based on scroll position
            const updateArrowVisibility = () => {
                const isAtStart = tagsContainer.scrollLeft <= 0;
                const isAtEnd = tagsContainer.scrollLeft >= (tagsContainer.scrollWidth - tagsContainer.clientWidth);
                
                leftArrow.style.opacity = isAtStart ? '0.3' : '1';
                rightArrow.style.opacity = isAtEnd ? '0.3' : '1';
                
                leftArrow.style.pointerEvents = isAtStart ? 'none' : 'auto';
                rightArrow.style.pointerEvents = isAtEnd ? 'none' : 'auto';
            };

            tagsContainer.addEventListener('scroll', updateArrowVisibility);
            window.addEventListener('resize', updateArrowVisibility);
            
            // Initial check
            updateArrowVisibility();
        }

        // Add click listeners to all tags
        const tags = document.getElementsByClassName("tag-item");
        Array.from(tags).forEach(tag => {
            tag.addEventListener("click", function(e) {
                createRipple(e);
                const contentKey = this.getAttribute('data-content');
                toggleCard(this, contentKey);
            });
        });

    } catch (error) {
        console.error('Error during initialization:', error, error.stack);
    }
});

// Video popup functionality
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-testimonial-video");
    const videoOverlay = document.getElementById("video-overlay");
    const closeButton = document.getElementById("close-video");
    const video = document.getElementById("popup-video");

    if (playButton) {
        playButton.addEventListener("click", function () {
            videoOverlay.style.display = "flex";
            video.play();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            videoOverlay.style.display = "none";
            video.pause();
            video.currentTime = 0;
        });
    }

    if (videoOverlay) {
        videoOverlay.addEventListener("click", function (e) {
            if (e.target === videoOverlay) {
                videoOverlay.style.display = "none";
                video.pause();
                video.currentTime = 0;
            }
        });
    }
});

// STATIC LOGO DISPLAY
document.addEventListener("DOMContentLoaded", function () {
  const partners = {
    cloud: [
      "assets/img/logos/azure.png",
      "assets/img/logos/biz.png",
      "assets/img/logos/google.png",
    ],
    tech: [
      "assets/img/logos/aruba.png",
      "assets/img/logos/comms.png",
      "assets/img/logos/enterprise.png",
      "assets/img/logos/hp.png",
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

// Add ripple effect function
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.className = 'ripple';
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}
