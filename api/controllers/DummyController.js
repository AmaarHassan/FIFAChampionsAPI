/**
 * DummyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    hello: (req, res, next) => {
        res.send("Hello World");
    }
};

