package com.service.impl;

import com.mapper.UserMapper;
import com.mybatisutil.MybatisUtil;
import com.service.UserService;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
SqlSession sqlSession= MybatisUtil.getSqlSession();
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
    @Override
    public List<Map<String, Object>> getlist() {
        return userMapper.getlist();
    }

    @Override
    public boolean DeleteUserById(int u_id) {
        return userMapper.DeleteUserById(u_id);
    }
}
