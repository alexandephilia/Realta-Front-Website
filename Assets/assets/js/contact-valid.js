document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary form elements
    const interestSelect = document.getElementById('service');
    const employeeDiv = document.getElementById('employeeSection');
    
    // Create dynamic form fields container
    const dynamicFieldsContainer = document.createElement('div');
    dynamicFieldsContainer.id = 'dynamicFields';
    dynamicFieldsContainer.className = 'mb-3';
    
    // Insert the container after the interest select
    interestSelect.parentNode.insertAdjacentElement('afterend', dynamicFieldsContainer);

    // Define the dynamic fields for each interest
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
            ]
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
                { value: 'datacenter', text: 'Data Center' },
                { value: 'industrial', text: 'Industrial Estate' },
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
        } else {
            input = document.createElement('input');
            input.type = fieldData.type;
        }
        
        input.className = 'form-control';
        input.id = fieldData.id;
        input.required = true;
        
        const invalidFeedback = document.createElement('div');
        invalidFeedback.className = 'invalid-feedback';
        invalidFeedback.textContent = `Please select ${fieldData.label.toLowerCase()}.`;
        
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(invalidFeedback);
        
        return div;
    }

    // Handle interest selection change
    interestSelect.addEventListener('change', function() {
        // Clear existing dynamic fields
        dynamicFieldsContainer.innerHTML = '';
        
        // Get the selected interest
        const selectedInterest = this.value;
        
        // If there's a matching field configuration, create and show it
        if (dynamicFields[selectedInterest]) {
            const field = createFormField(dynamicFields[selectedInterest]);
            dynamicFieldsContainer.appendChild(field);
            
            // Add animation classes
            field.style.opacity = '0';
            field.style.transform = 'translateY(-20px)';
            
            // Trigger animation
            setTimeout(() => {
                field.style.transition = 'all 0.3s ease-out';
                field.style.opacity = '1';
                field.style.transform = 'translateY(0)';
            }, 50);
        }
    });

    // Add form validation styles
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    });
});

// Add these styles to your CSS
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
`;
document.head.appendChild(style); 