package com.mapper;

import com.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
     List<Map<String, Object>> getlist();

    int deleteUser(int u_id);

    int addUser(User user);

    int selectUserById(int u_id);
}
