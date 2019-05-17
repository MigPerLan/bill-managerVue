const app = new Vue({
    el: "#form",
    methods: {
        moreBills() {
            $('#moreBills').append(`
            <div class="row">
                <div class="form-row mx-2 mt-2">
                    <div class="col-4">
                    <input type="text" class="form-control" placeholder="Bill" id="bills">
                    </div>
                    <div class="col-3">
                    <input type="number" class="form-control" placeholder="$">
                    </div>
                </div>
            </div>
        `);

        }
    }
});
