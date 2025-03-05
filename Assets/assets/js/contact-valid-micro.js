// Get service type immediately when script loads
const serviceType = document.currentScript ? document.currentScript.getAttribute('data-service-type') : 'HR System';

document.addEventListener('DOMContentLoaded', function() {
    // Get the specific form by ID
    const form = document.getElementById('microContactForm');
    if (!form) {
        console.error('Micro contact form not found!');
        return;
    }

    // Create dynamic form fields container
    const dynamicFieldsContainer = document.createElement('div');
    dynamicFieldsContainer.id = 'dynamicFields';
    dynamicFieldsContainer.className = 'mb-3';
    
    // Find the jobTitle div to insert after
    const jobTitleDiv = form.querySelector('#jobTitle').closest('.mb-3');
    if (jobTitleDiv) {
        jobTitleDiv.insertAdjacentElement('afterend', dynamicFieldsContainer);
    } else {
        console.error('Job title field not found!');
        return;
    }

    // Define the dynamic fields for each service type
    const dynamicFields = {
        'HR System': {
            id: 'totalEmployees',
            label: 'Total Employees',
            type: 'select',
            options: [
                { value: '', text: 'Choose...' },
                { value: '1-50', text: '1-50 employees' },
                { value: '51-100', text: '51-100 employees' },
                { value: '101-500', text: '101-500 employees' },
                { value: '501-1000', text: '501-1000 employees' },
                { value: '1001-5000', text: '1001-5000 employees' },
                { value: '5000+', text: 'More than 5000 employees' }
            ]
        },
        'Hotel Management System': {
            fields: [
                {
                    id: 'roomCount',
                    label: 'Number of Rooms',
                    type: 'select', 
                    options: [
                        { value: '', text: 'Choose...' },
                        { value: '1-20', text: '1-20 rooms' },
                        { value: '21-50', text: '21-50 rooms' },
                        { value: '51-100', text: '51-100 rooms' },
                        { value: '100+', text: 'More than 100 rooms' }
                    ]
                },
                {
                    id: 'hotelStars',
                    label: 'Hotel Classification',
                    type: 'select',
                    options: [
                        { value: '', text: 'Choose...' },
                        { value: '6-star', text: '6 Star' },
                        { value: '5-star', text: '5 Star' },
                        { value: '4-star', text: '4 Star' },
                        { value: '3-star', text: '3 Star' },
                        { value: '2-star', text: '2 Star' },
                        { value: '1-star', text: '1 Star' },
                        { value: 'non-stars', text: 'Non Stars' },
                        { value: 'boutique', text: 'Boutique' },
                        { value: 'villa', text: 'Villa' },
                        { value: 'budget', text: 'Budget' },
                        { value: 'melati', text: 'Melati' }
                    ]
                }
            ]
        },
        'Golf Course System': {
            id: 'holeCount',
            label: 'Number of Holes',
            type: 'select',
            options: [
                { value: '', text: 'Choose...' },
                { value: '9', text: '9 holes' },
                { value: '18', text: '18 holes' },
                { value: '27', text: '27 holes' },
                { value: '36', text: '36 holes' },
                { value: 'other', text: 'Other' }
            ],
            customField: {
                id: 'customHoleCount',
                label: 'Specify Number of Holes',
                type: 'number',
                placeholder: 'Enter number of holes',
                min: 1,
                max: 100
            }
        },
        'Property & Tenancy System': {
            id: 'propertyType',
            label: 'Type of Property',
            type: 'select',
            options: [
                { value: '', text: 'Choose...' },
                { value: 'apartment', text: 'Apartment' },
                { value: 'mall', text: 'Mall' },
                { value: 'office', text: 'Office' },
                { value: 'mixed', text: 'Mixed Use' },
                { value: 'others', text: 'Others' }
            ]
        }
    };

    // Function to create form field
    function createFormField(fieldData) {
        const div = document.createElement('div');
        div.className = 'mb-3';
        
        const label = document.createElement('label');
        label.className = 'form-label';
        label.setAttribute('for', fieldData.id);
        label.textContent = fieldData.label;
        
        let input;
        
        if (fieldData.type === 'select') {
            input = document.createElement('select');
            fieldData.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                input.appendChild(optionElement);
            });

            // Add change event listener for Golf Course System
            if (fieldData.id === 'holeCount') {
                input.addEventListener('change', function() {
                    const customFieldContainer = document.getElementById('customHoleCountContainer');
                    if (this.value === 'other') {
                        if (!customFieldContainer) {
                            const customField = fieldData.customField;
                            const customDiv = document.createElement('div');
                            customDiv.id = 'customHoleCountContainer';
                            customDiv.className = 'mb-3 mt-2';
                            
                            const customLabel = document.createElement('label');
                            customLabel.className = 'form-label';
                            customLabel.setAttribute('for', customField.id);
                            customLabel.textContent = customField.label;
                            
                            const customInput = document.createElement('input');
                            customInput.type = customField.type;
                            customInput.className = 'form-control';
                            customInput.id = customField.id;
                            customInput.name = customField.id;
                            customInput.required = true;
                            customInput.placeholder = customField.placeholder;
                            customInput.min = customField.min;
                            customInput.max = customField.max;
                            
                            const invalidFeedback = document.createElement('div');
                            invalidFeedback.className = 'invalid-feedback';
                            invalidFeedback.textContent = `Please enter a valid number of holes (1-100).`;
                            
                            customDiv.appendChild(customLabel);
                            customDiv.appendChild(customInput);
                            customDiv.appendChild(invalidFeedback);
                            
                            // Add animation classes
                            customDiv.style.opacity = '0';
                            customDiv.style.transform = 'translateY(-20px)';
                            
                            div.insertAdjacentElement('afterend', customDiv);
                            
                            // Trigger animation
                            setTimeout(() => {
                                customDiv.style.transition = 'all 0.3s ease-out';
                                customDiv.style.opacity = '1';
                                customDiv.style.transform = 'translateY(0)';
                            }, 50);
                        }
                    } else if (customFieldContainer) {
                        customFieldContainer.style.opacity = '0';
                        customFieldContainer.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            customFieldContainer.remove();
                        }, 300);
                    }
                });
            }
        } else {
            input = document.createElement('input');
            input.type = fieldData.type;
            if (fieldData.placeholder) input.placeholder = fieldData.placeholder;
            if (fieldData.min !== undefined) input.min = fieldData.min;
            if (fieldData.max !== undefined) input.max = fieldData.max;
        }
        
        input.className = 'form-control';
        input.id = fieldData.id;
        input.name = fieldData.id;
        input.required = true;
        
        const invalidFeedback = document.createElement('div');
        invalidFeedback.className = 'invalid-feedback';
        invalidFeedback.textContent = `Please ${fieldData.type === 'select' ? 'select' : 'enter'} ${fieldData.label.toLowerCase()}.`;
        
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(invalidFeedback);
        
        return div;
    }

    // Function to initialize form with specific service type
    function initializeServiceForm(serviceType) {
        // Clear existing dynamic fields
        dynamicFieldsContainer.innerHTML = '';
        
        // Create hidden input for service type
        const serviceInput = document.createElement('input');
        serviceInput.type = 'hidden';
        serviceInput.name = 'service';
        serviceInput.value = serviceType;
        form.appendChild(serviceInput);
        
        // If there's a matching field configuration, create and show it
        if (dynamicFields[serviceType]) {
            const fields = dynamicFields[serviceType].fields || [dynamicFields[serviceType]];
            
            fields.forEach((fieldData, index) => {
                const field = createFormField(fieldData);
                dynamicFieldsContainer.appendChild(field);
                
                // Add animation classes
                field.style.opacity = '0';
                field.style.transform = 'translateY(-20px)';
                
                // Trigger animation with staggered delay
                setTimeout(() => {
                    field.style.transition = 'all 0.3s ease-out';
                    field.style.opacity = '1';
                    field.style.transform = 'translateY(0)';
                }, 50 * (index + 1));
            });
        }
    }

    // Add form validation styles
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    });

    // Initialize with the service type
    if (serviceType && dynamicFields[serviceType]) {
        initializeServiceForm(serviceType);
    }
});

// Add these styles
const style = document.createElement('style');
style.textContent = `
    #dynamicFields {
        overflow: visible;
    }
    
    #dynamicFields > div {
        transition: all 0.3s ease-out;
    }
    
    .form-control.is-invalid {
        border-color: #dc3545;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    /* Dark mode styles */
    body.dark-mode .form-control {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.2);
    }

    body.dark-mode .form-control:focus {
        background-color: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        color: #ffffff;
    }

    body.dark-mode .form-label {
        color: rgba(255, 255, 255, 0.9);
    }
`;
document.head.appendChild(style); 