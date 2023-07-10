package com.controller;

import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    UserService userService;
    @RequestMapping("test")
    @ResponseBody
    public List<Map<String,Object>> test(){
        System.out.println("test");
        return userService.getlist();
    }

    @RequestMapping("DeleteUserById")
    @ResponseBody
    public boolean DeleteUserById(int u_id){
        System.out.println("delete by id = "+u_id);
        return userService.DeleteUserById(u_id);
    }
}
