﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.RateLimiting;
using System.Threading.Tasks;

namespace TouchSocket.Rpc.RateLimiting
{
    internal sealed class FixedWindowRateLimiterPolicy : RateLimiterPolicy
    {
        private readonly FixedWindowRateLimiterOptions m_options;

        public FixedWindowRateLimiterPolicy(FixedWindowRateLimiterOptions options)
        {
            this.m_options = options;
        }

        protected override RateLimiter NewRateLimiter(MethodInfo method)
        {
            return new FixedWindowRateLimiter(m_options);
        }
    }
}