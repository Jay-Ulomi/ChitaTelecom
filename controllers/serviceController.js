// Import the JSON data
const services = require('../views/Service/service.json').services;

// Route handlers
exports.getService = (req, res) => {
    // Send all services to the 'service' view
    res.render('Service/service', { services });
};

exports.getServiceById = (req, res) => {
    const serviceId = parseInt(req.params.id);

    // Find the service by its ID
    const service = services.find(s => s.id === serviceId);

    console.log(service);

    if (service) {
        // Render the 'service-detail' view with the service's details
        res.render('Service/service-detail', { services ,currentService: service });
    } else {
        // Send a 404 error if the service is not found
        res.status(404).send('Service not found');
    }
};
