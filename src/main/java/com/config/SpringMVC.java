package com.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
@Configuration
@ComponentScan({"com.controller","com.service","com.mapper"})
public class SpringMVC extends WebMvcConfigurationSupport {
}
