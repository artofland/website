<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                <v-card class="py-16 black" elevation-0>
                    <template v-if="registered">
                        <v-card-text class="text-center py-12">
                            <span class="text-h3 primary--text">Registration done !</span><br />
                            <v-btn class="my-12" color="accent" href="artofland://">Open Artof.Land</v-btn>
                        </v-card-text>
                    </template>
                    <template v-else>
                        <v-card-text>
                            <v-col cols=12 class="text-center">
                                Register an account
                            </v-col>
                            <v-col v-if="!metamask">
                                <v-list>
                                    <v-list-item @click="getWallet()">
                                        <img contain height="30" width="30"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" />Connect
                                        Metamask
                                        <v-spacer />(Web3)
                                    </v-list-item>
                                </v-list>
                                <v-col class="text-right">
                                    <a style="text-decoration: none;" target="_blank"
                                        href="https://metamask.io/">Install Metamask</a>
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn dark v-bind="attrs" v-on="on" icon>
                                                <v-icon small>mdi-help</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Metamask is a crypto wallet & gateway to blockchain apps like our</span>
                                    </v-tooltip>
                                </v-col>
                            </v-col>
                            <v-col v-if="metamask">
                                <v-text-field :value="metamask" disabled label="Metamask Wallet" />
                                <v-text-field placeholder="Username" v-model="username" label="Username" />
                                <v-text-field placeholder="Email" v-model="email" label="Email" />
                                <v-text-field placeholder="Password" v-model="password" type="password"
                                    label="Password" />
                                <v-btn :loading="loading" block color="accent" @click="register()">Register</v-btn>
                            </v-col>
                        </v-card-text>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar top color="error" v-model="error">An error produce please try later</v-snackbar>
        <v-snackbar top color="success" v-model="success">Success ! You will be redirect in few seconds ...</v-snackbar>
    </v-container>
</template>
<script>
import axios from 'axios';

export default {
    name: "RegisterPage",
    data: () => ({
        metamask: null,
        email: null,
        registered: false,
        username: null,
        password: null,
        error: false,
        success: false,
        loading: false,
    }),
    methods: {
        async getWallet() {
            if (typeof web3 === 'undefined') return;
            web3 = new Web3(window.ethereum)
            window.ethereum.enable().catch(error => {
                console.log(error)
            })

            console.log(web3);
            var user_address = await web3.eth.getAccounts()
            this.metamask = user_address[0]
        },
        register() {
            this.loading = true;
            axios.post('https://register.artof.land/register', {
                "username": this.username,
                "email": this.email,
                "password": this.password,
                "publicKey": this.metamask
            }).then((res) => {
                if (res.data.msg) {
                    this.error = true;
                } else {
                    this.success = true;
                    this.registered = true;
                }
            }).catch(err => {
                this.error = err;
            }).finally(() => {
                this.loading = false;
            })

        }
    }
}
</script>