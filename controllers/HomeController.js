


exports.getHome =async (req, res) => {
    try {
        res.render('Home/Index');
    } catch (error) {
        res.status(500).json(error);
    }
}