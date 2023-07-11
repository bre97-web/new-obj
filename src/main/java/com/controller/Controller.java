package com.controller;

import com.pojo.User;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    UserService userService;

    /**
     * 返回数据库user表中全部数据
     * @return
     */
    @RequestMapping(value = "selectAll", method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String, Object>> test() {
        System.out.println("test");
        return userService.getlist();
    }

    /**
     * 根据前端传入u_id 删除对应数据
     * @param u_id
     */
    @RequestMapping(value = "deleteUser")
    @ResponseBody
    public boolean deleteUser(int u_id) {
        System.out.println("delete +" + u_id);
        return userService.deleteUser(u_id);
    }

    /**
     * 增添数据
     *
     * @param user
     * @return boole
     */
    @RequestMapping(value = "addUser")
    @ResponseBody
    public boolean addUser(User user) {
        System.out.println("addUser  +" + user.toString());
        return userService.addUser(user);
    }

    /**
     * @param user u_id 需要修改的数据的id
     *             u_name 修改后的name
     *             u_pwd 修改后的pwd
     * @return boolean
     */
    @RequestMapping(value = "alterUser")
    @ResponseBody
    public boolean alterUser(User user) {
        System.out.println(user.toString());
        return userService.alterUser(user);
    }
}
