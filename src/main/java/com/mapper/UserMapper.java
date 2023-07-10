package com.mapper;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    public List<Map<String,Object>> getlist();
    public boolean DeleteUserById(int u_id);
}
