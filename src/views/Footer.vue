<template>
  <!-- Site footer -->
  <footer class="site-footer">
    <div class="container">
      <a-row type="flex">
        <a-col :sm="24" :md="7" :offset="1">
          <h6>About</h6>
          <p class="text-justify">
            Welcome to BrainStation Commerce, your number one source for all
            things shoes, bags, dog treats We're dedicated to giving you the
            very best of cloths, jewelery & electronics, with a focus on
            dependability, customer service and uniqueness. Founded in 2021 by
            Md. Al-Amin,
          </p>
        </a-col>

        <a-col :sm="24" :md="7" :offset="1">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li>
              <router-link to="/products/category/electronics"
                >Electronics</router-link
              >
            </li>
            <li>
              <router-link to="/products/category/jewelery"
                >Jewelery</router-link
              >
            </li>
            <li>
              <router-link to="/products/category/men's clothing"
                >Men's clothing</router-link
              >
            </li>
            <li>
              <router-link to="/products/category/women's clothing"
                >Women's clothing</router-link
              >
            </li>
          </ul>
        </a-col>

        <a-col :sm="24" :md="7" :offset="1">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><router-link to="/about">About Us</router-link></li>
            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/"
                >Contribute</a
              >
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
          </ul>
        </a-col>
      </a-row>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2021 All Rights Reserved by
            <a href="#">Brain Station</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#"> <FacebookOutlined /> </a>
            </li>
            <li>
              <a class="twitter" href="#"><TwitterOutlined /></a>
            </li>
            <!-- <li>
              <a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
            </li> -->
            <li>
              <a class="linkedin" href="#"> <LinkedinOutlined /> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    FacebookOutlined,
    TwitterOutlined,
    LinkedinOutlined,
  },
});
</script>

<style scoped>
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
