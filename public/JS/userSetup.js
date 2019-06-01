
Vue.component('user-form', {
    template: `
<div>
<div class="row d-flex justify-content-center">
<form @submit.prevent="onSubmit">
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
            <p> {{ bill.billName }} {{ bill.billCost }}dollars </p>
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
        onSubmit() {
            const amount = this.amount;
            const savings = this.savings;
            const payPeriod = this.payPeriod;
            const bills = this.bills;
            $.ajax({
                method: 'POST',
                url: "/user/",
                data: {
                    amount: amount,
                    savings: savings,
                    payPeriod: payPeriod,
                    bills: bills
                }
            })
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    if (err) console.log(err);

                });

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

Vue.component('homepage', {
    template: `
    <div>
    <div class="row">
    <div class="col-sm-12 d-flex justify-content-center">
        <h1>Total Spending Money</h1>
    </div>
</div>
<div class="row">
    <div class="col-sm-12 d-flex justify-content-center">
        <h1 id="total">$560</h1>
    </div>
</div>
<div class="row mt-5">
    <div class="col-sm-6 d-flex justify-content-center">
        <p id="biWeekly">Biweekly: $900</p>
    </div>
    <div class="col-sm-6 d-flex justify-content-center">
        <p id="biWeekly">Monthly: $1800</p>
    </div>
</div>
<div class="row d-flex justify-content-center mt-2">
    <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>
<div class="row d-flex justify-content-center mt-2">
    <h2>Total: $100</h2>
</div>
</div>
    `
})

Vue.component('login', {

    template: `
    <div>
    <div class="row d-flex justify-content-center">
        <form v-if="account" @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Enter email"  required v-model="logEmail">
            </div>
             <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="logPass">
            </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
                <div class="row">
                    <button type="button" class="btn btn-link" @click="accountchan">Don't have an account?</button>
                </div>
        </form>
   
        <form v-else @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Enter email"  required v-model="email">
            </div>
                <div class="form-group">
                 <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name"
                    placeholder="Enter your name" required autocomplete="name" v-model="name">
                </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div class="form-group">
                <label for="conPassword"> Re-enter password</label>
                <input type="password" class="form-control" id="conPassword" placeholder="Re-enter password" v-model="conPassword">
             </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
            <div class="row">
                <button type="button" class="btn btn-link" @click="accountchan">Already have an account?</button>
            </div>
        </form>
    </div>
    </div>
    `,
    data() {
        return {
            logEmail: null,
            logPass: null,
            email: null,
            name: null,
            password: null,
            conPassword: null,
            account: true
        }
    },
    methods: {
        onSubmit() {
            const email = this.email;
            const name = this.name;
            const password = this.password;
            const conPassword = this.conPassword;
            const logEmail = this.logEmail;
            const logPass = this.logPass;
            $.ajax({
                method: 'POST',
                url: "/signUp/",
                data: {
                    email: email,
                    name: name,
                    password: password,
                    conPassword: conPassword
                },
                success: function (response) {
                    if (response.redirect) {
                        window.location.href = response.redirect;
                    }
                    else {
                        console.log(err);
                    }
                }
            })
        },
        login() {
            const logEmail = this.logEmail;
            const logPass = this.logPass;
            $.ajax({
                method: 'POST',
                url: "/signUp/",
                data: {
                    logEmail: logEmail,
                    logPass: logPass
                },
                success: function (response) {
                    if (response.redirect) {
                        window.location.href = response.redirect;
                    }
                    else {
                        console.log(err);
                    }
                }
            })
        },
        accountchan() {
            if (this.account) {
                this.account = false;

            }
            else {
                this.account = true;

            }
        }
    }

})

const app = new Vue({
    el: "#app"
});

