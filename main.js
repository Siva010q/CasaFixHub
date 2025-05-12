// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Book Service Button Functionality
    const bookServiceBtn = document.getElementById('book-service-btn');
    if (bookServiceBtn) {
        bookServiceBtn.addEventListener('click', function() {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            
            // Create modal content
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            // Create modal header
            const modalHeader = document.createElement('div');
            modalHeader.className = 'modal-header';
            modalHeader.innerHTML = '<h2>Book a Service</h2><span class="close-modal">&times;</span>';
            
            // Create modal body
            const modalBody = document.createElement('div');
            modalBody.className = 'modal-body';
            modalBody.innerHTML = `
                <form id="booking-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="service">Service Type</label>
                        <select id="service" name="service" required>
                            <option value="">Select a service</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="electrical">Electrical</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="renovation">Home Renovation</option>
                            <option value="carpentry">Carpentry</option>
                            <option value="painting">Painting</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="date">Preferred Date</label>
                        <input type="date" id="date" name="date" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Additional Details</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Submit Request</button>
                </form>
            `;
            
            // Append header and body to modal
            modal.appendChild(modalHeader);
            modal.appendChild(modalBody);
            
            // Append modal to overlay
            overlay.appendChild(modal);
            
            // Append overlay to body
            document.body.appendChild(overlay);
            
            // Add event listener to close button
            const closeModal = document.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // Close modal when clicking outside
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
            
            // Handle form submission
            const bookingForm = document.getElementById('booking-form');
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show success message
                modalBody.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Booking Request Submitted!</h3>
                        <p>Thank you for choosing Casa Fix Hub. We'll contact you shortly to confirm your appointment.</p>
                        <button class="close-btn">Close</button>
                    </div>
                `;
                
                // Add event listener to close button
                const closeBtn = document.querySelector('.close-btn');
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
            });
        });
    }
    
    // Newsletter Form Functionality
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simple validation
            if (email) {
                // Create notification
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.innerHTML = 'Thank you for subscribing to our newsletter!';
                
                // Append notification to body
                document.body.appendChild(notification);
                
                // Clear input
                emailInput.value = '';
                
                // Remove notification after 3 seconds
                setTimeout(function() {
                    document.body.removeChild(notification);
                }, 3000);
            }
        });
    }
    
    // Add scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .page2, .page3, .page4');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Add CSS for the modal and animations
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal {
            background-color: white;
            border-radius: 10px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
            background-color: #7D53DF;
            color: white;
            border-radius: 10px 10px 0 0;
        }
        
        .close-modal {
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        .submit-btn {
            background-color: #7D53DF;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
            margin-top: 10px;
        }
        
        .submit-btn:hover {
            background-color: #4B0082;
        }
        
        .success-message {
            text-align: center;
            padding: 20px;
        }
        
        .success-message i {
            font-size: 50px;
            color: #4CAF50;
            margin-bottom: 15px;
        }
        
        .close-btn {
            background-color: #7D53DF;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
        }
        
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .service-card, .page2, .page3, .page4 {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .service-card.animate, .page2.animate, .page3.animate, .page4.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    document.head.appendChild(style);
});
