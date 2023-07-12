package com.mapper;

import com.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
     List<Map<String, Object>> getlist();

    int deleteUser(int u_id);

    int addUser(User user);

    Integer selectUserById(int u_id);
    public List<Map<String, User>> selectUserByAllField(User user);
}
