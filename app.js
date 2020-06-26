const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req,res){
    res.render("home")
})
app.get("/project", function(req,res){
    res.render("home")
})
app.get("/contact-us", function(req,res){
    res.render("contactus")
})
app.get("/about-us", function(req, res){
    res.render("aboutus")
})
app.get("/calculator", function(req, res){
    res.render("calculator")
})
app.get("/math-calculators", function(req, res){
    res.render("math")
})
app.get("/slope-calculator", function(req, res){
    res.render("slope")
})
app.get("/square-root-calculator", function(req, res){
    res.render("squareRootCalculator")
})
app.get("/shapes-area-calculators", function(req, res){
    res.render("areaCalculator")
})
app.get("/shapes-volume-calculators", function(req, res) {
    res.render("volume")
})
app.get("/surface-area-calculators", function(req, res) {
    res.render("surfaceArea")
})
app.get("/shapes-perimeter-calculators", function(req, res){
    res.render("perimeter")
})
app.get("/quadratic-calculator", function(req, res){
    res.render("quadraticCalculator")
})
app.get("/mixed-numbers-calculators", function(req, res){
    res.render("mixedNumber")
})
app.get("/gpa-calculator", function(req, res){
    res.render("gpaCalculator")
})
app.get("/education-calculators", function(req, res){
    res.render("education")
})
app.get("/average-grade-calculator", function(req, res){
    res.render("averageGrade")
})
app.get("/final-grade-calculator", function(req, res){
    res.render("finalGradeCalculator")
})
app.get("/gpa-to-letter-calculator", function(req, res){
    res.render("gpaLetter")
})
app.get("/finance-calculators", function(req, res){
    res.render("finance")
})
app.get("/stock-return-calculator", function(req, res){
    res.render("stockReturn")
})
app.get("/simple-loan-calculator", function(req, res){
    res.render("simpleLoanCalculator")
})
app.get("/mortgage-payment-calculator", function(req, res){
    res.render("mortgageCalculator")
})
app.get("/simple-auto-loan-calculator", function(req, res){
    res.render("autoLoan")
})
app.get("/auto-loan-calculator", function(req, res){
    res.render("carLoanPayment")
})
app.get("/simple-interest-calculator", function(req, res){
    res.render("simpleInterest")
})
app.get("/compound-interest-calculator", function(req, res){
    res.render("compoundInterest")
})
app.get("/margin-calculator", function(req, res){
    res.render("marginCalc")
})
app.get("/markup-calculator", function(req, res){
    res.render("markupCalc")
})
app.get("/price-calculator", function(req, res){
    res.render("priceCalculator")
})
app.get("/sales-calculator", function(req, res){
    res.render("salesCalculator")
})
app.get("/profit-calculator", function(req, res){
    res.render("profitCalculator")
})
app.get("/break-even-calculator", function(req, res){
    res.render("breakEven")
})
app.get("/profit-margin-calculator", function(req, res){
    res.render("profitmargin")
})
app.get("/sale-price-calculator", function(req, res){
    res.render("salePrice")
})
app.get("/selling-profit-calculator", function(req, res){
    res.render("sellingProfit")
})
app.get("/selling-discount-profit-calculator", function(req, res){
    res.render("sellingMarkdownProfit")
})
app.get("/discount-price-calculator", function(req, res){
    res.render("discount")
})
app.get("/sales-tax-calculator", function(req, res){
    res.render("salesTax")
})
app.get("/state-and-local-tax-calculator", function(req, res){
    res.render("stateTaxCalculator")
})
app.get("/ebay-fee-calculator", function(req, res){
    res.render("ebayFee")
})
app.get("/paypal-fee-calculator", function(req, res){
    res.render("paypalFee")
})
// Make another page called "others" and put it here
app.get("/number-to-word-calculator", function(req, res){
    res.render("numberToWord")
})
// 
app.get("/units-production-depreciation-calculator", function(req,res){
    res.render("unitsProductionDepreciation")
})
app.get("/activity-depreciation-calculator", function(req,res){
    res.render("activityDepreciation")
})
app.get("/rule-of-72-calculator", function(req, res){
    res.render("ruleof72")
})
app.get("/savings-calculator", function(req, res){
    res.render("savings")
})
app.get("/bid-ask-calculator", function(req, res){
    res.render("bidAsk")
})
app.get("/tip-calculator", function(req, res){
    res.render("tipCalculator")
})
app.get("/gross-pay-calculator", function(req, res){
    res.render("grossPay")
})
//Change the background of input to red when it's less than 0 or other conditions
//Put all variables into letters for final to all files
//Make H2 for subcategories, but give them a class of h4
let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}
app.listen(port, function(){
    console.log("Site started")
})


