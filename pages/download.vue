<template>
<v-container>
    <v-col cols="12" class="my-6">
                <span class="text-h3">Join our <span class="primary--text">World...</span></span><br />
                <span class="text-h3">Download</span>
            </v-col>

            <v-row class="my-16">
                <v-col cols="6">
                    <v-card disabled>
                        <v-card-text class="text-center">
                            <v-icon class="display-3">mdi-apple</v-icon><br/>
                            <span class="text-h3">Mac OS</span><br/>
                    <span class="text-h5">Available soon</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card disabled>
                        <v-card-text class="text-center">
                            <v-icon class="display-3">mdi-microsoft</v-icon><br/>
                            <span class="text-h3">Windows</span><br/>
                            <span class="text-h5">Available soon</span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
</v-container>
</template>
<script>
export default {
    name:'DownloadPage'
}
</script>