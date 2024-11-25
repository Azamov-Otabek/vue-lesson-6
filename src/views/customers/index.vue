<script setup>
import { ref, onMounted, reactive } from "vue";
import anime from "animejs";
import CountTo from "vue-count-to";
import Table from '../../components/ui/global-table/index.vue'

const animatedNumber = ref(0);

onMounted(() => {
  startAnimation();
});

const startAnimation = () => {
  anime({
    targets: animatedNumber,
    value: 5423,
    easing: "easeInOutQuad",
    duration: 500,
    round: 1,
  });
};



const data = reactive([
    {
        customerName: "John Doe",
        company: "ABC Corp",
        phoneNumber: "+1 123 456 7890",
        email: "johndoe@example.com",
        country: "USA",
        status: "Active"
    },
    {
        customerName: "Jane Smith",
        company: "XYZ Inc",
        phoneNumber: "+2 345 678 9012",
        email: "janesmith@example.com",
        country: "Canada",
        status: "Inactive"
    },
    {
        customerName: "Mike Johnson",
        company: "PQR Ltd",
        phoneNumber: "+3 456 789 0123",
        email: "mikejohnson@example.com",
        country: "UK",
        status: "Active"
    },
    {
        customerName: "Sarah Wilson",
        company: "STU Group",
        phoneNumber: "+4 567 890 1234",
        email: "sarahwilson@example.com",
        country: "Australia",
        status: "Inactive"
    },
    {
        customerName: "David Brown",
        company: "DEF Industries",
        phoneNumber: "+5 678 901 2345",
        email: "davidbrown@example.com",
        country: "France",
        status: "Active"
    },
    {
        customerName: "Emily Davis",
        company: "GHI Products",
        phoneNumber: "+6 789 012 3456",
        email: "emilydavis@example.com",
        country: "Germany",
        status: "Active"
    },
    {
        customerName: "Michael Wilson",
        company: "JKL Services",
        phoneNumber: "+7 890 123 4567",
        email: "michaelwilson@example.com",
        country: "Italy",
        status: "Inactive"
    },
    {
        customerName: "Sarah Wilson",
        company: "MNO Solutions",
        phoneNumber: "+8 901 234 5678",
        email: "sarahwilson@example.com",
        country: "Spain",
        status: "Active"
    },
    {
        customerName: "David Brown",
        company: "NOP Inc",
        phoneNumber: "+9 012 345 6789",
        email: "davidbrown@example.com",
        country: "Japan",
        status: "Inactive"
    }
])


const columns = reactive([
  {
    name: "Custmomer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Compyany",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  }
])


</script>

<template>
  <section class="customers">
        <div class="customers-statistics">
            <div class="customers-statistics-card">
                <h2><i class='bx bx-user' ></i></h2>
                <div class="customers-statistics-card--body">
                    <p>Total Customers</p>
                    <h4>{{ animatedNumber }}</h4>
                    <div class="arrows">
                        <i class='bx bx-up-arrow-alt' ></i>
                        <span>16%</span>
                        <p> this month</p>
                    </div>
                </div>
            </div>
            <div class="customers-statistics-card">
                <h2><i class='bx bxs-user-plus' ></i></h2>
                <div class="customers-statistics-card--body">
                    <p>Members</p>
                    <h4>{{ animatedNumber }}</h4>
                    <div class="arrows arrows-red">
                        <i class='bx bx-down-arrow-alt' ></i>
                        <span>1%</span>
                        <p>  this month</p>
                    </div>
                </div>
            </div>
            <div class="customers-statistics-card">
                <h2><i class='bx bx-tv' ></i></h2>
                <div class="customers-statistics-card--body">
                    <p>Active Now</p>
                    <h4>{{ animatedNumber }}</h4>
                </div>
            </div>
        </div>

        <div class="customers-lists">
            <Table :data="data" :columns="columns"/> 
        </div>
        
  </section>
</template>

<style lang="scss" src="./_style.scss" scoped></style>
