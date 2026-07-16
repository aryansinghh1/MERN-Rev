let count = 0;
const logger = (req,res,next) => {
    console.log("request came");
    count += 1;
    console.log(count);

    next();
}

module.exports = { logger };