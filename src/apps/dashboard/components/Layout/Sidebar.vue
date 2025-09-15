<template>
    <div class="max-w-64 w-full h-full py-3 shadow-general-03 flex flex-col items-center">
        <div class="max-w-52 w-full">
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <input type="text" class="input" placeholder="Search"/>
            </div>
        </div>
    </div>
</template>

<script>
const dummyMenu = {
    links: [
        {
            title: 'Home',
            icon: 'home',
            to: '/'
        }
    ]
}
export default {
    setup () {
        

        return {}
    }
}
</script>
