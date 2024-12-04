﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchSocket.WebApi
{
    /// <summary>
    /// 指定参数应使用请求头绑定。
    /// </summary>
    [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false, Inherited = false)]
    public sealed class FromHeaderAttribute : WebApiNameAttribute
    {
    }
}