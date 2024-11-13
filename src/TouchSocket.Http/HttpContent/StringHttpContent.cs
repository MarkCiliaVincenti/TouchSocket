﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchSocket.Http
{
    public class StringHttpContent : ReadonlyMemoryHttpContent
    {
        public StringHttpContent(string content,Encoding encoding) : base(encoding.GetBytes(content))
        {
            
        }
    }
}
