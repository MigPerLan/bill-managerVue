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
        <input type="number" class="form-control" id="amount" aria-describedby="amount" placeholder="$" v-model.number="amount">
    </div>
    <div class="form-group">
        <label for="savings">Savings:</label>
        <input type="number" class="form-control" id="savings" aria-describedby="savings" placeholder="$" v-model.number="savings">
    </div>
    <label for="weekly">Pay Period:</label>
    <div class="row">
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" id="weekly"
                    value="weekly" checked v-model="payPeriod">
                <label class="form-check-label" for="weekly">
                    Weekly
                </label>
            </div>
        </div>
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio" id="biweekly"
                    value="biweekly" v-model="payPeriod">
                <label class="form-check-label" for="biweekly">
                    Biweekly
                </label>
            </div>
        </div>
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="radio"  id="monthly"
                    value="monthly" v-model="payPeriod">
                <label class="form-check-label" for="monthly">
                    Monthly
                </label>
            </div>
        </div>
    </div>
     <bills-form @setBills="addBills"></bills-form>
     <div class="row mt-2">
        <div class= "col=2">
            <ul>
            <li v-for="bill in bills">
            <p> {{ bill.billName }} {{ bill.billCost }} </p>
            </li>
            </ul>
        </div>
     </div>
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
            bills: [],
        }
    },
    methods: {
        addBills(setBills) {
            this.bills.push(setBills);
        },
        onSubmit(){
            console.log(this.name);
            console.log(this.amount);
            console.log(this.savings);
            console.log(this.payPeriod);
            console.log(this.bills);
        }

    }
});

Vue.component('bills-form', {
    template: `
<div>
    <form>
        <label for="bills">Bills:</label>
    <div class="row">
        <div class="form-row mx-2">
            <div class="col-4">
                <input type="text" class="form-control" placeholder="Bill" id="bills" v-model="billName" >
            </div>
            <div class="col-3">
                <input type="number" class="form-control" placeholder="$" v-model.number="billCost">
            </div>
        </div>
        <div class="col">
            <button type="button" style="border:none; background-color:transparent" v-on:click="onClick" ><i class="fas fa-plus"></i></button>
        </div>
    </div>
</form> 
</div>
    `,
    data() {
        return {
            billName: null,
            billCost: null
        }
    },
    methods: {

        onClick() {
            let billArr = {
                billName: this.billName,
                billCost: this.billCost
            }
            this.$emit('setBills', billArr);
            this.billName = null;
            this.billCost = null;
        }
    }
})

const app = new Vue({
    el: "#app"

});
