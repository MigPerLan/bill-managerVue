Vue.component('user-form', {
    template: `
<div>
<div class="row d-flex justify-content-center">
<form @submit.prevent="onSubmit">
    <div class="form-group">
        <label for="username">Name:</label>
        <input type="text" class="form-control" id="username" aria-describedby="name"
            placeholder="Enter your name" required autocomplete="name" v-model="name">
    </div>
    <div class="form-group">
        <label for="amount">Amount per check:</label>
        <input type="number" class="form-control" id="amount" aria-describedby="amount" placeholder="$" v-model="amount" number>
    </div>
    <div class="form-group">
        <label for="savings">Savings:</label>
        <input type="number" class="form-control" id="savings" aria-describedby="savings" placeholder="$" v-model="savings" number>
    </div>
    <label for="weekly">Pay Period:</label>
    <div class="row">
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="weekly"
                    value="weekly" checked v-model="payPeriod">
                <label class="form-check-label" for="weekly">
                    Weekly
                </label>
            </div>
        </div>
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="biweekly"
                    value="biweekly" v-model="payPeriod">
                <label class="form-check-label" for="biweekly">
                    Biweekly
                </label>
            </div>
        </div>
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="monthly"
                    value="monthly" v-model="payPeriod">
                <label class="form-check-label" for="monthly">
                    Monthly
                </label>
            </div>
        </div>
    </div>
    <label for="bills">Bills:</label>
    <div class="row">
        <div class="form-row mx-2">
            <div class="col-4">
                <input type="text" class="form-control" placeholder="Bill" id="bills" v-model="billName">
            </div>
            <div class="col-3">
                <input type="number" class="form-control" placeholder="$" v-model="billPrice">
            </div>
        </div>
        <div class="col">
            <button type="button" style="border:none; background-color:transparent"
              v-on:click="moreBills"><i class="fas fa-plus"></i></button>
        </div>
    </div>
    <div id="moreBills"></div>
    <button type="submit"  class="btn btn-primary mt-2">Submit</button>
</form>
</div>      
</div>
`,
    data() {
        return {
            name: null,
            amount: null,
            savings: null,
            payPeriod: null,
            billName: [],
            billPrice: [],
        }
    },
    methods: {
        moreBills() {
            $('#moreBills').append(`

            <div class="row">
                <div class="form-row mx-2 mt-2">
                    <div class="col-4">
                    <input type="text" class="form-control" placeholder="Bill" id="bills" v-model="bills">
                    </div>
                    <div class="col-3">
                    <input type="number" class="form-control" placeholder="$">
                    </div>
                </div>
        `);
        },
        onSubmit() {
            console.log(this.name);
            console.log(this.amount);
            console.log(this.savings);
            console.log(this.payPeriod);
            console.log(this.billName + " " + this.billPrice);


        }


    }
});

const app = new Vue({
    el: "#app"

});
