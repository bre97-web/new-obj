package com.service;

import java.util.List;
import java.util.Map;

public interface UserService {
    List<Map<String, Object>> getlist();
    boolean DeleteUserById(int u_id);
}
