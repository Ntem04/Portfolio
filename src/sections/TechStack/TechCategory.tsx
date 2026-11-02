import React from 'react'
import type { TechCategoryData } from '../../types'
import { Layout, Server, Database, Wrench } from 'lucide-react'

export interface TechCategoryProps {
  category: TechCategoryData
}

export const TechCategory: React.FC<TechCategoryProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#6a3c20]" />
      case 'Server':
        return <Server className="w-5 h-5 text-[#6a3c20]" />
      case 'Database':
        return <Database className="w-5 h-5 text-[#6a3c20]" />
      default:
        return <Wrench className="w-5 h-5 text-[#6a3c20]" />
    }
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#161a1d]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#6a3c20]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon(category.iconName)}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#161a1d]/40 uppercase">
            // {category.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#161a1d] mb-2">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#161a1d]/70 leading-relaxed mb-6 font-sans">
          {category.subtitle}
        </p>
      </div>

      {/* Skills badges */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-slate-100 text-[#161a1d] border border-black/5 group-hover:border-[#6a3c20]/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechCategory

