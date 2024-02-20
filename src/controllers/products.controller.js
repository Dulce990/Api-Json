import productDAO from "../DAO/productdao.js";
export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.json( products ))
        .catch(err => res.json({
            status: "Server unavailable"
        })
        );
}
export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
        .then(result => {
            !result ? res.json({
                message: "product not found :/"
            }) : res.json( result );
        })
        .catch(err => res.json({
            status: "Server unavailable"
        })
        );
}

export const insertOne = (req, res) => {
    productDAO.insertOne(req.body)
        .then(result => res.redirect('/api/products/'))
        .catch(err => res.json({ status: "Server unavailable" }));
}

export const updateOne = (req, res) => {
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => res.redirect('/api/products/'))
        .catch(err => res.json({ status: "Server unavailable" }));
}

export const deleteOne = (req, res) => {
    productDAO.deleteOne(req.params.barcode)
        .then(result => {
            !result ? res.json({
                message: "product not found"
            }) : res.redirect('/api/products/');
        })
        .catch(err => res.json({ status: "Server unavailable" }));
}