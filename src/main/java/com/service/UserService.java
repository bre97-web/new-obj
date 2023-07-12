package com.service;

import com.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    List<Map<String, Object>> getlist();
    boolean deleteUser(int u_id);

    boolean alterUser(User user);

    boolean addUser(User user);

    boolean selectUserById(int u_id);
}
