package com.controller;

import com.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {
    /**
     * 接口名 :login
     * 请求方式:post
     * 需要参数:u_id,u_name,u_pwd
     * 返回类型:boolean
     * 用途:登录
     */
    @PostMapping("login")
    public String login(User user){

        return "index";
    }
}
